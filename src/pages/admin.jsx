import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This is for accessibility reasons

const AdminPage = () => {
    const [bookings, setBookings] = useState([]);
    const [confirmedBookings, setConfirmedBookings] = useState([]);
    const [availability, setAvailability] = useState([]);
    // const [selectedDate, setSelectedDate] = useState('');
    // const [singleRooms, setSingleRooms] = useState(5);
    // const [groupRooms, setGroupRooms] = useState(2);

    const [bookingToUpdate, setBookingToUpdate] = useState(null);
    const [updatedBooking, setUpdatedBooking] = useState({
        name: '',
        number: '',
        email: '',
        people: '',
        indate: '',
        outdate: '',
        option: '',
        note: '',
        singleRooms: 1,
    });

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    // const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);

    useEffect(() => {
        axios.get('https://vivian-garden-back.vercel.app/api/booking')
            .then((response) => {
                setBookings(response.data.bookings || []);
                setConfirmedBookings(response.data.confirmed || []);
            }).catch(error => {
                console.error("There was an error fetching the bookings!", error);
            });

        axios.get('https://vivian-garden-back.vercel.app/api/availability')
            .then((response) => {
                setAvailability(response.data || []);
            }).catch(error => {
                console.error("There was an error fetching the availability!", error);
            });
    }, []);

    const handleConfirm = (index) => {
        const bookingToConfirm = bookings[index];
        axios.post('https://vivian-garden-back.vercel.app/api/booking/confirm', bookingToConfirm)
            .then(() => {
                axios.get('https://vivian-garden-back.vercel.app/api/booking')
                    .then((response) => {
                        setBookings(response.data.bookings || []);
                        setConfirmedBookings(response.data.confirmed || []);
                        setAvailability(response.data.availability || []); // Update availability state if needed
                        window.location.reload()

                    }).catch(error => {
                        console.error("There was an error fetching the bookings!", error);
                    });
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    alert(error.response.data.message);
                } else {
                    alert('Error confirming booking');
                }
            });
    };

    const handleDecline = (index) => {
        const bookingToDecline = bookings[index];
        axios.post('https://vivian-garden-back.vercel.app/api/booking/decline', bookingToDecline)
            .then(() => {
                setBookings(bookings.filter((_, i) => i !== index));
            });
    };

    // const updateAvailabilityData = () => {
    //     axios.get('https://vivian-garden-back.vercel.app/api/availability')
    //         .then((response) => {
    //             setAvailability(response.data || []);
    //         })
    //         .catch(error => {
    //             console.error("There was an error fetching the availability!", error);
    //         });
    // };

    const handleUpdateBooking = (bookingId, updatedData) => {
        // Retrieve the booking data before updating
        const bookingToUpdate = confirmedBookings.find(booking => booking._id === bookingId);
        if (!bookingToUpdate) {
            console.error(`Booking with ID ${bookingId} not found in confirmed bookings.`);
            return;
        }
    
        // Calculate differences in single rooms and group rooms
        const singleRoomsDiff = updatedData.singleRooms - (bookingToUpdate.singleRooms || 0);
        const groupRoomsDiff = updatedData.groupRooms - (bookingToUpdate.groupRooms || 0);
    
        // Reset availability to default values
        const resetAvailability = () => {
            axios.get('https://vivian-garden-back.vercel.app/api/availability')
                .then(response => {
                    const updatedAvailability = response.data.map(avail => ({
                        ...avail,
                        singleRooms: avail.date === bookingToUpdate.indate ? 5 : avail.singleRooms,
                        groupRooms: avail.date === bookingToUpdate.indate ? 2 : avail.groupRooms,
                    }));
    
                    // Update availability in the backend with reset values
                    Promise.all(updatedAvailability.map(avail =>
                        axios.put(`https://vivian-garden-back.vercel.app/api/availability/${avail.date}`, {
                            singleRooms: avail.singleRooms,
                            groupRooms: avail.groupRooms,
                        })
                    )).then(() => {
                        console.log('Availability reset successfully.');
                        // Proceed to update the confirmed booking
                        updateConfirmedBooking(bookingId, updatedData);
                    }).catch(error => {
                        console.error('Error resetting availability:', error);
                    });
                })
                .catch(error => {
                    console.error("There was an error fetching the availability!", error);
                });
        };
    
        // Function to update confirmed booking after availability reset
        const updateConfirmedBooking = (bookingId, updatedData) => {
            // Make the PUT request to update the booking
            axios.put(`https://vivian-garden-back.vercel.app/api/confirmedBookings/${bookingId}`, updatedData)
                .then((response) => {
                    // Update confirmed bookings state with updated data
                    setConfirmedBookings(confirmedBookings.map(booking => booking._id === bookingId ? response.data : booking));
    
                    // Update availability for each day between indate and the day before outdate
                    let currentDate = new Date(bookingToUpdate.indate);
                    const endDate = new Date(bookingToUpdate.outdate);
                    endDate.setDate(endDate.getDate() - 1); // Exclude the check-out date
    
                    while (currentDate <= endDate) {
                        const dateString = currentDate.toISOString().split('T')[0];
    
                        // Find the availability record for this date
                        const availabilityRecord = availability.find(avail => avail.date === dateString);
                        if (availabilityRecord) {
                            // Update the number of single rooms and group rooms
                            if (updatedData.option === 'Phòng Lẻ') {
                                availabilityRecord.singleRooms += singleRoomsDiff;
                            } else {
                                availabilityRecord.groupRooms += groupRoomsDiff;
                            }
    
                            // Make the PUT request to update the availability in the backend
                            axios.put(`https://vivian-garden-back.vercel.app/api/availability/${dateString}`, {
                                singleRooms: availabilityRecord.singleRooms,
                                groupRooms: availabilityRecord.groupRooms,
                            }).then(response => {
                                console.log('Availability updated successfully:', response.data);
                            }).catch(error => {
                                console.error('Error updating availability:', error);
                            });
                        }
    
                        // Move to the next day
                        currentDate.setDate(currentDate.getDate() + 1);
                    }
    
                    setBookingToUpdate(null); // Close the form/modal
                    setIsUpdateModalOpen(false); // Close the modal
                })
                .catch((error) => {
                    console.error('Error updating booking:', error);
                });
        };
    
        // Call resetAvailability to start the process
        resetAvailability();
    };
    
    
    

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (bookingToUpdate) {
            handleUpdateBooking(bookingToUpdate._id, updatedBooking);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBooking({ ...updatedBooking, [name]: value });
    };

    const handleUpdateClick = (booking) => {
        setBookingToUpdate(booking);
        setUpdatedBooking({
            name: booking.name,
            number: booking.number,
            email: booking.email,
            people: booking.people,
            indate: booking.indate,
            outdate: booking.outdate,
            option: booking.option,
            note: booking.note,
            singleRooms: booking.singleRooms || 1,
        });
        setIsUpdateModalOpen(true);
    };

    const handleUpdateClose = () => {
        setBookingToUpdate(null);
        setIsUpdateModalOpen(false);
    };

    const handleDeleteConfirmedBooking = (id) => {
        const bookingToDelete = confirmedBookings.find(booking => booking._id === id);
        if (!bookingToDelete) return;
    
        const { indate, outdate, singleRooms } = bookingToDelete;
    
        axios.delete(`https://vivian-garden-back.vercel.app/api/confirmedBookings/${id}`)
            .then(() => {
                setConfirmedBookings(confirmedBookings.filter(booking => booking._id !== id));
    
                // Update availability for each day between indate and the day before outdate
                let currentDate = new Date(indate);
                const endDate = new Date(outdate);
                endDate.setDate(endDate.getDate() - 1); // Exclude the check-out date
    
                while (currentDate <= endDate) {
                    const dateString = currentDate.toISOString().split('T')[0];
    
                    // Find the availability record for this date
                    const availabilityRecord = availability.find(avail => avail.date === dateString);
                    if (availabilityRecord) {
                        // Update the number of single rooms
                        availabilityRecord.singleRooms += singleRooms;
    
                        // Make the PUT request to update the availability in the backend
                        axios.put(`https://vivian-garden-back.vercel.app/api/availability/${dateString}`, {
                            singleRooms: availabilityRecord.singleRooms,
                            groupRooms: availabilityRecord.groupRooms, // Assuming group rooms stay the same
                        }).then(response => {
                            console.log('Availability updated successfully:', response.data);
                        }).catch(error => {
                            console.error('Error updating availability:', error);
                        });
                    }
    
                    // Move to the next day
                    currentDate.setDate(currentDate.getDate() + 1);
                }
    
                // Optionally, refetch the availability data from the backend to refresh the state
                axios.get('https://vivian-garden-back.vercel.app/api/availability')
                    .then(response => {
                        setAvailability(response.data || []);
                        window.location.reload()

                    }).catch(error => {
                        console.error("There was an error fetching the availability!", error);
                    });
            })
            .catch(error => {
                console.error('Error deleting confirmed booking:', error);
            });

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (value === 'Phòng Lẻ') {
            setUpdatedBooking({ ...updatedBooking, [name]: value, singleRooms: 1 });
        } else {
            setUpdatedBooking({ ...updatedBooking, [name]: value });
        }
    };
    
    

    return (
        <div className="container">
            <h1>Admin Page</h1>

            {/* Requests Table */}
            <h2>Requests</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>People</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.name}</td>
                            <td>{booking.indate}</td>
                            <td>{booking.outdate}</td>
                            <td>{booking.people}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => handleConfirm(index)}>Confirm</button>
                                <button className="btn btn-danger" onClick={() => handleDecline(index)}>Decline</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Confirmed Bookings Table */}
            <h2>Confirmed Bookings</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>People</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {confirmedBookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.name}</td>
                            <td>{booking.indate}</td>
                            <td>{booking.outdate}</td>
                            <td>{booking.people}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => handleUpdateClick(booking)}>Update</button>
                                <button className="btn btn-danger" onClick={() => handleDeleteConfirmedBooking(booking._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal
                isOpen={isUpdateModalOpen}
                onRequestClose={handleUpdateClose}
                contentLabel="Update Booking"
            >
                <h2>Update Booking</h2>
                <form onSubmit={handleUpdateSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={updatedBooking.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="number"
                            value={updatedBooking.number}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={updatedBooking.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">People</label>
                        <input
                            type="number"
                            className="form-control"
                            name="people"
                            value={updatedBooking.people}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Check In</label>
                        <input
                            type="date"
                            className="form-control"
                            name="indate"
                            value={updatedBooking.indate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Check Out</label>
                        <input
                            type="date"
                            className="form-control"
                            name="outdate"
                            value={updatedBooking.outdate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Option</label>
                        <select name="option" className="form-control" onChange={handleChange} required>
                            <option value="">Chọn một lựa chọn</option>
                            <option value="Nguyen Căn">Nguyên Căn</option>
                            <option value="6 Phòng">6 Phòng</option>
                            <option value="Phòng Lẻ">Phòng Lẻ</option>
                        </select>
                    </div>
                    {updatedBooking.option === 'Phòng Lẻ' && (
                        <div className="mb-3">
                            <label className="form-label">Single Rooms</label>
                            <input
                                type="number"
                                className="form-control"
                                name="singleRooms"
                                value={updatedBooking.singleRooms}
                                onChange={handleInputChange}
                            />
                        </div>
                    )}
                    <div className="mb-3">
                        <label className="form-label">Note</label>
                        <input
                            type="text"
                            className="form-control"
                            name="note"
                            value={updatedBooking.note}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={handleUpdateClose}>Cancel</button>
                </form>
            </Modal>


        <h2>Room Availability</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Single Rooms</th>
                    <th>Group Rooms</th>
                </tr>
            </thead>
            <tbody>
                {availability.map((avail, index) => (
                    <tr key={index}>
                        <td>{avail.date}</td>
                        <td>{avail.singleRooms}</td>
                        <td>{avail.groupRooms}</td>
                    </tr>
                ))}
            </tbody>
        </table>


        </div>
    );
};

export default AdminPage;

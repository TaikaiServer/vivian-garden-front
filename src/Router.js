// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './pages/home';
import RoomView from './pages/roomview';
import SingleRoomView from './pages/single-room-view';
import GroupRoomView from './pages/group-room-view';
import ActivityView from './pages/activity';
import ServiceView from './pages/service';
import ContactView from './pages/contact';
import EntertainView from './pages/entertainment';
import InsView from './pages/instruction';
import BookingView from './pages/booking';
import AdminPage from './pages/admin';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roomview" element={<RoomView />} />
        <Route path="/single-room-view" element={<SingleRoomView/>} />
        <Route path="/group-room-view" element={<GroupRoomView />} />
        <Route path="/activity" element={<ActivityView />} />
        <Route path="/entertain" element={<EntertainView />} />
        <Route path="/service" element={<ServiceView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/instruction" element={<InsView />} />
        <Route path="/book-room" element={<BookingView />} />

        <Route path="/admin" element={<AdminPage />} />





      </Routes>
    </Router>
  );
};

export default AppRouter;

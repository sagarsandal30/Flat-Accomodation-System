import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegistrationPage/RegisterPage';
import RentFlatsPage from './pages/RentFlatsPage';
import ForOwnersPage from './pages/ForOwnersPage';

// Owner Pages
import OwnerDashboard from './pages/owner/OwnerDashboard';
import FlatsManagement from './pages/owner/FlatsManagement';
import TenantManagement from './pages/owner/TenantManagement';
import PaymentsTracking from './pages/owner/PaymentsTracking';
import MaintenanceManagement from './pages/owner/MaintenanceManagement';
import AnnouncementsPage from './pages/owner/AnnouncementsPage';
import BookingRequests from './pages/owner/BookingRequests';

// Tenant Pages
import TenantDashboard from './pages/tenant/TenantDashboard';
import TenantPayments from './pages/tenant/TenantPayments';
import TenantMaintenance from './pages/tenant/TenantMaintenance';

function App() {
  return (
   
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/rent-flats" element={<RentFlatsPage />} />
        <Route path="/for-owners" element={<ForOwnersPage />} />

        {/* Owner Panel */}
        <Route path="/owner">
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="flats" element={<FlatsManagement />} />
          <Route path="tenants" element={<TenantManagement />} />
          <Route path="payments" element={<PaymentsTracking />} />
          <Route path="maintenance" element={<MaintenanceManagement />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="bookings" element={<BookingRequests />} />
        </Route>

        {/* Tenant Portal */}
        <Route path="/tenant">
          <Route path="dashboard" element={<TenantDashboard />} />
          <Route path="payments" element={<TenantPayments />} />
          <Route path="maintenance" element={<TenantMaintenance />} />
        </Route>

        {/* Catch-all Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}

export default App;

import Sidebar from './Sidebar';
import { Bell } from 'lucide-react';

export default function DashboardLayout({ role, user, title, children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar role={role} user={user} />
      <div className="dashboard-body">
        <div className="dashboard-topbar">
          <div className="topbar-title">{title}</div>
          <div className="topbar-right">
            <div className="topbar-notif">
              <Bell size={17} />
              <span className="topbar-notif-dot" />
            </div>
            <div className="avatar">{user?.avatar || 'U'}</div>
          </div>
        </div>
        <div className="admin-page">{children}</div>
      </div>
    </div>
  );
}

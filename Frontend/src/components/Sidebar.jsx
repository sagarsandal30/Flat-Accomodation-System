import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Building2, Users, CreditCard,
  Wrench, Megaphone, FileText, LogOut, Home
} from 'lucide-react';
import { useAuth } from '../../Context/AuthContext';

const ownerLinks = [
  { 
    label: 'MAIN',
    items: [
    { 
      to: '/owner/dashboard', 
      icon: <LayoutDashboard size={18}/>, 
      label: 'Dashboard' 
    },
  ]
},
  { 
    label: 'MANAGEMENT',
     items: [
    { to: '/owner/flats', 
      icon: <Building2 size={18}/>, 
      label: 'Flats' 
    },
    { 
      to: '/owner/tenants',
       icon: <Users size={18}/>, 
       label: 'Tenants' 
    },
    { 
      to: '/owner/payments',
      icon: <CreditCard size={18}/>,
      label: 'Payments' 
    },
    { 
      to: '/owner/maintenance', 
      icon: <Wrench size={18}/>, 
      label: 'Maintenance' 
    },
    { 
      to: '/owner/announcements', 
      icon: <Megaphone size={18}/>, 
      label: 'Announcements' 
    },
    { 
      to: '/owner/bookings', 
      icon: <FileText size={18}/>, 
      label: 'Booking Requests' 
    },
  ]
},
];

const tenantLinks = [
  { label: 'MAIN', items: [
    { to: '/tenant/dashboard', icon: <LayoutDashboard size={18}/>, label: 'Dashboard' },
  ]},
  { label: 'MY FLAT', items: [
    { to: '/tenant/payments', icon: <CreditCard size={18}/>, label: 'Payments' },
    { to: '/tenant/maintenance', icon: <Wrench size={18}/>, label: 'Maintenance' },
  ]},
];

export default function Sidebar({ role = 'owner', user }) {
  const {logout} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const links = role === 'owner' ? ownerLinks : tenantLinks;
  const initials = user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';


  const LogOutHandle=async()=>{
    await logout();
  }
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-text">FlatEase</div>
        <div className="sidebar-logo-role">{role === 'owner' ? 'Owner Panel' : 'Tenant Portal'}</div>
      </div>

      <nav className="sidebar-nav">
        {links.map(group => (
          <div key={group.label}>
            <div className="sidebar-section-label">{group.label}</div>
            {group.items.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`sidebar-link ${location.pathname === item.to ? 'active' : ''}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="avatar">{initials}</div>
          <div>
            <div className="sidebar-user-name">{user?.name || 'User'}</div>
            <div className="sidebar-user-role">{role}</div>
          </div>
        </div>
        <button
          className="sidebar-link"
          style={{ width: '100%', marginTop: 4, color: 'var(--red)' }}
          onClick={() => LogOutHandle()}
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}

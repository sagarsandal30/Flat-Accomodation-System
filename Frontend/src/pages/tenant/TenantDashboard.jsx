import DashboardLayout from '../../components/DashboardLayout';
import StatusBadge from '../../components/StatusBadge';
import { tenants, flats, payments, maintenanceRequests, announcements } from '../../data/dummyData';
import { Calendar, MapPin, Maximize, Wifi, Car } from 'lucide-react';

// Simulate logged-in tenant as Priya Sharma (t1)
const currentTenant = tenants[0];
const tenant = { name: currentTenant.name, avatar: currentTenant.avatar };

export default function TenantDashboard() {
  const flat = flats.find(f => f.id === currentTenant.flatId);
  const myPayments = payments.filter(p => p.tenantId === currentTenant.id);
  const upcomingPayment = myPayments.find(p => p.status === 'pending');
  const lastPayment = myPayments.find(p => p.status === 'paid');
  const myComplaints = maintenanceRequests.filter(m => m.tenantId === currentTenant.id);

  return (
    <DashboardLayout role="tenant" user={tenant} title="My Dashboard">
      {/* Flat Banner */}
      {flat && (
        <div className="tenant-flat-banner" style={{ marginBottom: 24 }}>
          <img src={flat.image} alt={flat.flatNo} className="tenant-flat-banner-img" />
          <div className="tenant-flat-banner-overlay">
            <div className="tenant-flat-info">
              <div className="tenant-flat-no">Flat {flat.flatNo}</div>
              <div className="tenant-flat-building">{flat.building} · {flat.address}</div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="dash-stats" style={{ marginBottom: 28 }}>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: '#EFF6FF' }}>
            <Maximize size={20} color="#3B82F6" />
          </div>
          <div>
            <div className="stat-card-value">{flat?.area} sqft</div>
            <div className="stat-card-label">Flat Size · {flat?.type}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: '#ECFDF5' }}>
            <span style={{ fontSize: '1.1rem' }}>₹</span>
          </div>
          <div>
            <div className="stat-card-value">₹{flat?.rent.toLocaleString()}</div>
            <div className="stat-card-label">Monthly Rent</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: upcomingPayment ? '#FEF2F2' : '#ECFDF5' }}>
            <Calendar size={20} color={upcomingPayment ? '#EF4444' : '#10B981'} />
          </div>
          <div>
            <div className="stat-card-value" style={{ fontSize: '1.1rem' }}>
              {upcomingPayment ? upcomingPayment.dueDate : 'All Clear'}
            </div>
            <div className="stat-card-label">
              {upcomingPayment ? 'Next Due Date' : 'No pending dues'}
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: '#FFFBEB' }}>
            <span style={{ fontSize: '1.1rem' }}>🔧</span>
          </div>
          <div>
            <div className="stat-card-value">{myComplaints.filter(c => c.status !== 'resolved').length}</div>
            <div className="stat-card-label">Active Complaints</div>
          </div>
        </div>
      </div>

      <div className="dash-grid">
        {/* Flat Details */}
        {flat && (
          <div className="info-card">
            <div className="info-card-title"><MapPin size={16} /> Flat Details</div>
            {[
              ['Flat Number', flat.flatNo],
              ['Building', flat.building],
              ['Floor', `Floor ${flat.floor}`],
              ['Type', flat.type],
              ['Area', `${flat.area} sq ft`],
              ['Monthly Rent', `₹${flat.rent.toLocaleString()}`],
              ['Move-in Date', currentTenant.moveInDate],
              ['Lease End', currentTenant.leaseEnd],
            ].map(([key, val]) => (
              <div key={key} className="info-row">
                <span className="info-key">{key}</span>
                <span className="info-val">{val}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {flat.amenities.map(a => (
                <span key={a} style={{ background: 'var(--border-light)', padding: '3px 10px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Payment Status */}
        <div>
          <div className="info-card" style={{ marginBottom: 16 }}>
            <div className="info-card-title">💳 Payment Status</div>
            {upcomingPayment && (
              <div style={{ background: '#FEF2F2', borderRadius: 12, padding: '14px 16px', marginBottom: 14 }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#991b1b', marginBottom: 4 }}>⚠️ Payment Due</div>
                <div style={{ fontSize: '1rem', fontWeight: 700 }}>{upcomingPayment.month}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--black)' }}>₹{upcomingPayment.amount.toLocaleString()}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>Due by {upcomingPayment.dueDate}</div>
              </div>
            )}
            {lastPayment && (
              <div className="info-row">
                <span className="info-key">Last Payment</span>
                <div style={{ textAlign: 'right' }}>
                  <div className="info-val">₹{lastPayment.amount.toLocaleString()}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{lastPayment.month} · {lastPayment.paidDate}</div>
                </div>
              </div>
            )}
          </div>

          {/* Recent Complaints */}
          <div className="info-card">
            <div className="info-card-title" style={{ marginBottom: 14 }}>🔧 Recent Complaints</div>
            {myComplaints.slice(0, 3).map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid var(--border-light)' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{c.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{c.category} · {c.raisedOn}</div>
                </div>
                <StatusBadge status={c.status} />
              </div>
            ))}
            {myComplaints.length === 0 && <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No complaints raised yet.</div>}
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div style={{ marginTop: 24 }}>
        <div className="section-head"><div className="section-head-title">📢 Announcements</div></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {announcements.slice(0, 2).map(a => (
            <div key={a.id} className="announce-card">
              <div className="announce-title" style={{ marginBottom: 6 }}>{a.title}</div>
              <p className="announce-body">{a.body}</p>
              <div className="announce-footer">
                <span>📅 {a.postedOn}</span>
                <span>By {a.postedBy}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

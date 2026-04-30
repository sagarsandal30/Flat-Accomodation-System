import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import StatusBadge from '../../components/StatusBadge';
import { bookingRequests as initial, flats } from '../../data/dummyData';
import { Check, X, Calendar, Phone, Mail } from 'lucide-react';

const owner = { name: 'Raj Mehta', avatar: 'RM' };

export default function BookingRequests() {
  const [requests, setRequests] = useState(initial);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? requests : requests.filter(r => r.status === filter);
  const updateStatus = (id, status) => setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));

  const getFlatInfo = (flatId) => flats.find(f => f.id === flatId);

  return (
    <DashboardLayout role="owner" user={owner} title="Booking Requests">
      <div className="section-head">
        <div>
          <div className="section-head-title">Flat Booking Requests</div>
          <div className="section-head-sub">{requests.filter(r => r.status === 'pending').length} pending requests</div>
        </div>
        <div className="filter-bar">
          {['all','pending','approved','rejected'].map(f => (
            <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {filtered.map(r => {
          const flat = getFlatInfo(r.flatId);
          return (
            <div key={r.id} className="booking-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div className="avatar" style={{ width: 44, height: 44, fontSize: '0.875rem', background: 'var(--border-light)', fontWeight: 700 }}>
                    {r.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div>
                    <div className="booking-name">{r.name}</div>
                    <div className="booking-sub" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Mail size={12}/> {r.email}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Phone size={12}/> {r.phone}</span>
                    </div>
                  </div>
                </div>
                <StatusBadge status={r.status} />
              </div>

              <div style={{ background: 'var(--bg)', borderRadius: 8, padding: '8px 12px', fontSize: '0.8rem', marginBottom: 10, display: 'flex', gap: 16, flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
                <span>🏠 Flat: <strong>{r.flatNo}</strong></span>
                <span>📐 {r.flatType}</span>
                {flat && <span>💰 ₹{flat.rent.toLocaleString()}/mo</span>}
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={12}/> {r.appliedOn}</span>
              </div>

              <div className="booking-msg">"{r.message}"</div>

              {r.status === 'pending' && (
                <div className="booking-actions">
                  <button className="btn btn-black btn-sm" onClick={() => updateStatus(r.id, 'approved')}><Check size={14}/> Approve</button>
                  <button className="btn btn-danger btn-sm" onClick={() => updateStatus(r.id, 'rejected')}><X size={14}/> Reject</button>
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && <div className="empty-state"><p>No booking requests in this category.</p></div>}
      </div>
    </DashboardLayout>
  );
}

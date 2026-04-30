import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import StatusBadge from '../../components/StatusBadge';
import { maintenanceRequests as initial } from '../../data/dummyData';
import { ChevronDown } from 'lucide-react';

const owner = { name: 'Raj Mehta', avatar: 'RM' };
const statusOptions = ['open', 'in-progress', 'resolved'];

export default function MaintenanceManagement() {
  const [complaints, setComplaints] = useState(initial);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? complaints : complaints.filter(c => c.status === filter);

  const updateStatus = (id, status) => setComplaints(prev => prev.map(c => c.id === id ? { ...c, status } : c));

  const priorityColor = { high: '#FEF2F2', medium: '#FFFBEB', low: '#F0FDF4' };
  const priorityText = { high: '#991b1b', medium: '#92400e', low: '#166534' };

  return (
    <DashboardLayout role="owner" user={owner} title="Maintenance Management">
      <div className="section-head">
        <div>
          <div className="section-head-title">Maintenance Requests</div>
          <div className="section-head-sub">{complaints.filter(c => c.status === 'open').length} open, {complaints.filter(c => c.status === 'in-progress').length} in progress</div>
        </div>
        <div className="filter-bar">
          {['all','open','in-progress','resolved'].map(f => (
            <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : f === 'in-progress' ? 'In Progress' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {filtered.map(c => (
          <div key={c.id} className="complaint-card">
            <div className="complaint-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ background: priorityColor[c.priority], color: priorityText[c.priority], fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>
                    {c.priority.toUpperCase()}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{c.category}</span>
                </div>
                <div className="complaint-title">{c.title}</div>
                <div className="complaint-meta">
                  <span>🏠 {c.flatNo}</span><span>👤 {c.tenantName}</span><span>📅 {c.raisedOn}</span>
                  {c.assignedTo && <span>🔧 {c.assignedTo}</span>}
                </div>
              </div>
              <StatusBadge status={c.status} />
            </div>
            <p className="complaint-desc">{c.description}</p>
            <div className="complaint-footer">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Update Status:</span>
                <select
                  className="form-select"
                  style={{ padding: '5px 10px', fontSize: '0.8rem', width: 'auto' }}
                  value={c.status}
                  onChange={e => updateStatus(c.id, e.target.value)}
                >
                  {statusOptions.map(s => <option key={s} value={s}>{s === 'in-progress' ? 'In Progress' : s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                </select>
              </div>
              {c.resolvedOn && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Resolved: {c.resolvedOn}</span>}
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="empty-state"><Wrench size={32}/><p>No complaints in this category.</p></div>}
      </div>
    </DashboardLayout>
  );
}

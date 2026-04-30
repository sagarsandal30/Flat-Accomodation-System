import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import StatusBadge from '../../components/StatusBadge';
import { tenants, maintenanceRequests } from '../../data/dummyData';
import { Plus, X, Wrench, Calendar, MessageSquare } from 'lucide-react';

const currentTenant = tenants[0];
const user = { name: currentTenant.name, avatar: currentTenant.avatar };

export default function TenantMaintenance() {
  const [complaints, setComplaints] = useState(maintenanceRequests.filter(m => m.tenantId === currentTenant.id));
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ category: 'Plumbing', title: '', description: '', priority: 'medium' });

  const handleRaise = () => {
    const newComplaint = {
      id: `m${Date.now()}`,
      ...form,
      tenantId: currentTenant.id,
      tenantName: currentTenant.name,
      flatNo: 'A-101', // Mocking flat no
      status: 'open',
      raisedOn: new Date().toISOString().split('T')[0],
      assignedTo: null
    };
    setComplaints([newComplaint, ...complaints]);
    setShowModal(false);
    setForm({ category: 'Plumbing', title: '', description: '', priority: 'medium' });
  };

  return (
    <DashboardLayout role="tenant" user={user} title="Maintenance Requests">
      <div className="section-head">
        <div>
          <div className="section-head-title">My Complaints</div>
          <div className="section-head-sub">Track and raise new maintenance requests</div>
        </div>
        <button className="btn btn-black" onClick={() => setShowModal(true)}>
          <Plus size={16}/> Raise Complaint
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {complaints.map(c => (
          <div key={c.id} className="complaint-card">
            <div className="complaint-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{c.category}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>· {c.raisedOn}</span>
                </div>
                <div className="complaint-title">{c.title}</div>
              </div>
              <StatusBadge status={c.status} />
            </div>
            <p className="complaint-desc">{c.description}</p>
            <div className="complaint-footer">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {c.assignedTo && <span>Assigned to: <strong>{c.assignedTo}</strong></span>}
                {c.resolvedOn && <span>Resolved on: <strong>{c.resolvedOn}</strong></span>}
              </div>
            </div>
          </div>
        ))}
        {complaints.length === 0 && (
          <div className="empty-state">
            <Wrench size={40} strokeWidth={1.5} />
            <p>No maintenance requests raised yet.</p>
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div className="modal-title">Raise New Complaint</div>
              <button className="icon-btn" onClick={() => setShowModal(false)}><X size={18}/></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-select" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Carpentry</option>
                  <option>Pest Control</option>
                  <option>Housekeeping</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Title</label>
                <input className="form-input" placeholder="What is the issue?" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" placeholder="Provide more details..." value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Priority</label>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['low', 'medium', 'high'].map(p => (
                    <button
                      key={p}
                      type="button"
                      className={`filter-btn ${form.priority === p ? 'active' : ''}`}
                      onClick={() => setForm({...form, priority: p})}
                      style={{ flex: 1, textTransform: 'capitalize' }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-black" onClick={handleRaise}>Submit Request</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

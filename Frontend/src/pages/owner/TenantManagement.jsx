import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import StatusBadge from '../../components/StatusBadge';
import { tenants as initialTenants, flats } from '../../data/dummyData';
import { Plus, Trash2, X, Phone, Mail, Calendar } from 'lucide-react';

const owner = { name: 'Raj Mehta', avatar: 'RM' };

export default function TenantManagement() {
  const [tenants, setTenants] = useState(initialTenants);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', flatId: '', moveInDate: '', occupation: '' });

  const vacantFlats = flats.filter(f => f.status === 'vacant');

  const handleRemove = (id) => setTenants(prev => prev.filter(t => t.id !== id));
  const handleAdd = () => {
    setTenants(prev => [...prev, { id: `t${Date.now()}`, ...form, avatar: form.name.split(' ').map(n=>n[0]).join('').toUpperCase(), leaseEnd: '', emergencyContact: '' }]);
    setShowModal(false);
  };

  const getFlatInfo = (flatId) => flats.find(f => f.id === flatId);

  return (
    <DashboardLayout role="owner" user={owner} title="Tenant Management">
      <div className="section-head">
        <div>
          <div className="section-head-title">All Tenants</div>
          <div className="section-head-sub">{tenants.length} active tenants</div>
        </div>
        <button className="btn btn-black" onClick={() => setShowModal(true)}><Plus size={16}/> Assign Tenant</button>
      </div>

      <div className="table-wrap">
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th>Tenant</th><th>Contact</th><th>Flat</th><th>Move In</th><th>Lease End</th><th>Occupation</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {tenants.map(t => {
                const flat = getFlatInfo(t.flatId);
                return (
                  <tr key={t.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div className="avatar">{t.avatar}</div>
                        <div>
                          <div style={{ fontWeight: 700 }}>{t.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-secondary)' }}><Phone size={12}/> {t.phone}</div>
                      </div>
                    </td>
                    <td>
                      {flat ? <div><div style={{ fontWeight: 600 }}>{flat.flatNo}</div><div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{flat.building}</div></div> : '—'}
                    </td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t.moveInDate}</td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t.leaseEnd || '—'}</td>
                    <td style={{ fontSize: '0.85rem' }}>{t.occupation}</td>
                    <td>
                      <button className="icon-btn danger" onClick={() => handleRemove(t.id)}><Trash2 size={15}/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div className="modal-title">Assign New Tenant</div>
              <button className="icon-btn" onClick={() => setShowModal(false)}><X size={18}/></button>
            </div>
            <div className="modal-grid">
              {[['Full Name','name','Tenant name'],['Email','email','email@example.com'],['Phone','phone','+91 98765 43210'],['Occupation','occupation','Profession'],['Move-in Date','moveInDate',''],].map(([label,key,ph]) => (
                <div className="form-group" key={key}>
                  <label className="form-label">{label}</label>
                  <input className="form-input" type={key === 'moveInDate' ? 'date' : 'text'} placeholder={ph} value={form[key]} onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))} />
                </div>
              ))}
              <div className="form-group">
                <label className="form-label">Assign Flat</label>
                <select className="form-select" value={form.flatId} onChange={e => setForm(p => ({ ...p, flatId: e.target.value }))}>
                  <option value="">Select a flat</option>
                  {vacantFlats.map(f => <option key={f.id} value={f.id}>{f.flatNo} — {f.building}</option>)}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-black" onClick={handleAdd}>Assign Tenant</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

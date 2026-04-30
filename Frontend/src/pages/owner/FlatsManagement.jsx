import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import StatusBadge from '../../components/StatusBadge';
import { flats as initialFlats } from '../../data/dummyData';
import { Plus, Pencil, Trash2, X, Building2, Bed, Maximize } from 'lucide-react';

const owner = { name: 'Raj Mehta', avatar: 'RM' };

export default function FlatsManagement() {
  const [flats, setFlats] = useState(initialFlats);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ flatNo: '', building: '', floor: '', type: '1BHK', area: '', rent: '', address: '', status: 'vacant' });

  const openAdd = () => { setEditing(null); setForm({ flatNo: '', building: '', floor: '', type: '1BHK', area: '', rent: '', address: '', status: 'vacant' }); setShowModal(true); };
  const openEdit = (f) => { setEditing(f.id); setForm({ flatNo: f.flatNo, building: f.building, floor: f.floor, type: f.type, area: f.area, rent: f.rent, address: f.address, status: f.status }); setShowModal(true); };
  const handleDelete = (id) => setFlats(prev => prev.filter(f => f.id !== id));
  const handleSave = () => {
    if (editing) {
      setFlats(prev => prev.map(f => f.id === editing ? { ...f, ...form } : f));
    } else {
      setFlats(prev => [...prev, { id: `f${Date.now()}`, ...form, tenantId: null, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800', amenities: [] }]);
    }
    setShowModal(false);
  };

  return (
    <DashboardLayout role="owner" user={owner} title="Flats Management">
      <div className="section-head">
        <div>
          <div className="section-head-title">All Flats</div>
          <div className="section-head-sub">{flats.length} properties in portfolio</div>
        </div>
        <button className="btn btn-black" onClick={openAdd}><Plus size={16}/> Add Flat</button>
      </div>

      <div className="table-wrap">
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th>Flat No</th><th>Building</th><th>Type</th><th>Floor</th><th>Area</th><th>Rent/mo</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {flats.map(f => (
                <tr key={f.id}>
                  <td style={{ fontWeight: 700 }}>{f.flatNo}</td>
                  <td>{f.building}</td>
                  <td><span style={{ background: 'var(--border-light)', padding: '3px 10px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600 }}>{f.type}</span></td>
                  <td>Floor {f.floor}</td>
                  <td>{f.area} sq ft</td>
                  <td style={{ fontWeight: 700 }}>₹{Number(f.rent).toLocaleString()}</td>
                  <td><StatusBadge status={f.status} /></td>
                  <td>
                    <div className="icon-btns">
                      <button className="icon-btn" title="Edit" onClick={() => openEdit(f)}><Pencil size={15}/></button>
                      <button className="icon-btn danger" title="Delete" onClick={() => handleDelete(f.id)}><Trash2 size={15}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div className="modal-title">{editing ? 'Edit Flat' : 'Add New Flat'}</div>
              <button className="icon-btn" onClick={() => setShowModal(false)}><X size={18}/></button>
            </div>
            <div className="modal-grid">
              {[['Flat No','flatNo','e.g. A-101'],['Building','building','Building name'],['Floor','floor','1'],['Area (sqft)','area','950'],['Rent (₹)','rent','18000'],['Address','address','Full address']].map(([label, key, ph]) => (
                <div className="form-group" key={key}>
                  <label className="form-label">{label}</label>
                  <input className="form-input" placeholder={ph} value={form[key]} onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))} />
                </div>
              ))}
              <div className="form-group">
                <label className="form-label">Type</label>
                <select className="form-select" value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))}>
                  {['1BHK','2BHK','3BHK','Studio'].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-select" value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}>
                  <option value="vacant">Vacant</option>
                  <option value="occupied">Occupied</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-black" onClick={handleSave}>{editing ? 'Save Changes' : 'Add Flat'}</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { announcements as initial } from '../../data/dummyData';
import { Plus, X, Megaphone, Calendar, Trash2 } from 'lucide-react';

const owner = { name: 'Raj Mehta', avatar: 'RM' };
const priorityBadge = { high: 'announce-high', medium: 'announce-medium', low: 'announce-low' };

export default function AnnouncementsPage() {
  const [list, setList] = useState(initial);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: '', body: '', priority: 'medium', target: 'all' });

  const handlePost = () => {
    setList(prev => [{ id: `a${Date.now()}`, ...form, postedBy: 'Owner', postedOn: new Date().toISOString().slice(0,10) }, ...prev]);
    setForm({ title: '', body: '', priority: 'medium', target: 'all' });
    setShowModal(false);
  };
  const handleDelete = (id) => setList(prev => prev.filter(a => a.id !== id));

  return (
    <DashboardLayout role="owner" user={owner} title="Announcements">
      <div className="section-head">
        <div>
          <div className="section-head-title">Announcements</div>
          <div className="section-head-sub">Post notices to tenants</div>
        </div>
        <button className="btn btn-black" onClick={() => setShowModal(true)}><Plus size={16}/> Post Announcement</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {list.map(a => (
          <div key={a.id} className="announce-card">
            <div className="announce-header">
              <div>
                <div style={{ display: 'flex', align: 'center', gap: 8, marginBottom: 6 }}>
                  <span className={`announce-icon-badge ${priorityBadge[a.priority]}`}>
                    {a.priority.toUpperCase()} PRIORITY
                  </span>
                </div>
                <div className="announce-title">{a.title}</div>
              </div>
              <button className="icon-btn danger" onClick={() => handleDelete(a.id)}><Trash2 size={15}/></button>
            </div>
            <p className="announce-body">{a.body}</p>
            <div className="announce-footer">
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={12}/> {a.postedOn}</span>
              <span>Posted by {a.postedBy}</span>
              <span>Target: {a.target === 'all' ? 'All Tenants' : a.target}</span>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div className="modal-title">Post Announcement</div>
              <button className="icon-btn" onClick={() => setShowModal(false)}><X size={18}/></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="form-group">
                <label className="form-label">Title</label>
                <input className="form-input" placeholder="Announcement title" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Write your announcement..." value={form.body} onChange={e => setForm(p => ({ ...p, body: e.target.value }))} />
              </div>
              <div className="modal-grid">
                <div className="form-group">
                  <label className="form-label">Priority</label>
                  <select className="form-select" value={form.priority} onChange={e => setForm(p => ({ ...p, priority: e.target.value }))}>
                    <option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Target</label>
                  <select className="form-select" value={form.target} onChange={e => setForm(p => ({ ...p, target: e.target.value }))}>
                    <option value="all">All Tenants</option><option value="sunrise">Sunrise Residency</option><option value="greenvalley">Green Valley</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-black" onClick={handlePost}><Megaphone size={15}/> Post</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

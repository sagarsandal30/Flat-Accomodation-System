import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import StatusBadge from '../../components/StatusBadge';
import { payments } from '../../data/dummyData';
import { Filter, IndianRupee } from 'lucide-react';

const owner = { name: 'Raj Mehta', avatar: 'RM' };

export default function PaymentsTracking() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? payments : payments.filter(p => p.status === filter);
  const totalCollected = payments.filter(p => p.status === 'paid').reduce((s, p) => s + p.amount, 0);
  const totalPending = payments.filter(p => p.status !== 'paid').reduce((s, p) => s + p.amount, 0);

  return (
    <DashboardLayout role="owner" user={owner} title="Payments Tracking">
      {/* Summary */}
      <div className="grid-3" style={{ marginBottom: 28 }}>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: '#ECFDF5' }}><IndianRupee size={20} color="#10B981"/></div>
          <div><div className="stat-card-value">₹{(totalCollected/1000).toFixed(0)}K</div><div className="stat-card-label">Total Collected</div></div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: '#FEF2F2' }}><IndianRupee size={20} color="#EF4444"/></div>
          <div><div className="stat-card-value">₹{(totalPending/1000).toFixed(0)}K</div><div className="stat-card-label">Total Pending</div></div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: '#F3F4F6' }}><IndianRupee size={20} color="#6B7280"/></div>
          <div><div className="stat-card-value">{payments.length}</div><div className="stat-card-label">Total Records</div></div>
        </div>
      </div>

      <div className="table-wrap">
        <div className="table-header">
          <span className="table-title">Payment Records</span>
          <div className="filter-bar">
            {['all','paid','pending','overdue'].map(f => (
              <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th>Tenant</th><th>Flat</th><th>Month</th><th>Amount</th><th>Due Date</th><th>Paid Date</th><th>Method</th><th>Status</th></tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600 }}>{p.tenantName}</td>
                  <td>{p.flatNo}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{p.month}</td>
                  <td style={{ fontWeight: 700 }}>₹{p.amount.toLocaleString()}</td>
                  <td style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{p.dueDate}</td>
                  <td style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{p.paidDate || '—'}</td>
                  <td style={{ fontSize: '0.85rem' }}>{p.method || '—'}</td>
                  <td><StatusBadge status={p.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

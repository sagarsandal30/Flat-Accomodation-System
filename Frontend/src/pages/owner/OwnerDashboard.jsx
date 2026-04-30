import DashboardLayout from '../../components/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import StatusBadge from '../../components/StatusBadge';
import { ownerStats, payments, maintenanceRequests, announcements } from '../../data/dummyData';
import { Building2, Users, CreditCard, Wrench, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const owner = { name: 'Raj Mehta', avatar: 'RM' };

export default function OwnerDashboard() {
  const recentPayments = payments.slice(0, 5);
  const recentComplaints = maintenanceRequests.slice(0, 4);

  return (
    <DashboardLayout role="owner" user={owner} title="Dashboard">
      {/* Stats */}
      <div className="dash-stats" style={{ marginBottom: 28 }}>
        <DashboardCard icon={<Building2 size={20}/>} label="Total Flats" value={ownerStats.totalFlats} color="#EFF6FF" textColor="#3B82F6" footer="All properties" />
        <DashboardCard icon={<CheckCircle size={20}/>} label="Occupied" value={ownerStats.occupiedFlats} color="#ECFDF5" textColor="#10B981" footer={`${ownerStats.vacantFlats} vacant`} />
        <DashboardCard icon={<Users size={20}/>} label="Total Tenants" value={ownerStats.totalTenants} color="#F5F3FF" textColor="#8B5CF6" footer="Active leases" />
        <DashboardCard icon={<AlertCircle size={20}/>} label="Pending Payments" value={ownerStats.pendingPayments} color="#FEF2F2" textColor="#EF4444" footer="Need collection" />
        <DashboardCard icon={<Wrench size={20}/>} label="Open Complaints" value={ownerStats.openComplaints} color="#FFFBEB" textColor="#F59E0B" footer="Needs attention" />
        <DashboardCard icon={<TrendingUp size={20}/>} label="Revenue Collected" value={`₹${(ownerStats.totalRevenue/1000).toFixed(0)}K`} color="#F0FDF4" textColor="#16A34A" footer="This period" />
      </div>

      <div className="dash-grid">
        {/* Recent Payments */}
        <div className="table-wrap">
          <div className="table-header">
            <span className="table-title">Recent Payments</span>
            <a href="/owner/payments" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>View All →</a>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Tenant</th><th>Flat</th><th>Month</th><th>Amount</th><th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.map(p => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 600 }}>{p.tenantName}</td>
                    <td>{p.flatNo}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{p.month}</td>
                    <td style={{ fontWeight: 700 }}>₹{p.amount.toLocaleString()}</td>
                    <td><StatusBadge status={p.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Complaints */}
        <div>
          <div className="section-head">
            <div><div className="section-head-title">Recent Complaints</div></div>
            <a href="/owner/maintenance" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>View All →</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {recentComplaints.map(c => (
              <div key={c.id} className="complaint-card">
                <div className="complaint-header">
                  <div>
                    <div className="complaint-title">{c.title}</div>
                    <div className="complaint-meta">
                      <span>🏠 {c.flatNo}</span>
                      <span>👤 {c.tenantName}</span>
                      <span>🔧 {c.category}</span>
                    </div>
                  </div>
                  <StatusBadge status={c.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Announcement */}
      {announcements[0] && (
        <div className="info-card" style={{ marginTop: 24 }}>
          <div className="info-card-title">📢 Latest Announcement</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 6 }}>{announcements[0].title}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{announcements[0].body}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 10 }}>Posted on {announcements[0].postedOn}</div>
        </div>
      )}
    </DashboardLayout>
  );
}

import DashboardLayout from '../../components/DashboardLayout';
import StatusBadge from '../../components/StatusBadge';
import { tenants, payments } from '../../data/dummyData';
import { CreditCard, Download, ExternalLink } from 'lucide-react';

const currentTenant = tenants[0];
const user = { name: currentTenant.name, avatar: currentTenant.avatar };

export default function TenantPayments() {
  const myPayments = payments.filter(p => p.tenantId === currentTenant.id);

  return (
    <DashboardLayout role="tenant" user={user} title="My Payments">
      <div className="section-head">
        <div>
          <div className="section-head-title">Payment History</div>
          <div className="section-head-sub">View and manage your rent payments</div>
        </div>
      </div>

      <div className="table-wrap">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Paid Date</th>
                <th>Method</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myPayments.map(p => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600 }}>{p.month}</td>
                  <td style={{ fontWeight: 700 }}>₹{p.amount.toLocaleString()}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{p.dueDate}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{p.paidDate || '—'}</td>
                  <td style={{ fontSize: '0.85rem' }}>{p.method || '—'}</td>
                  <td><StatusBadge status={p.status} /></td>
                  <td>
                    {p.status === 'paid' ? (
                      <button className="icon-btn" title="Download Receipt"><Download size={16}/></button>
                    ) : (
                      <button className="btn btn-black btn-sm">Pay Now</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="info-card" style={{ marginTop: 24 }}>
        <div className="info-card-title"><CreditCard size={16} /> Payment Instructions</div>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Rent is due by the 5th of every month. You can pay via UPI, Bank Transfer, or Cheque.
          After payment, please allow 24-48 hours for the status to be updated by the owner.
        </p>
      </div>
    </DashboardLayout>
  );
}

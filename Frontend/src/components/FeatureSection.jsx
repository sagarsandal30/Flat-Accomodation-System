import { Building2, CreditCard, Wrench } from 'lucide-react';

const features = [
  {
    icon: <Building2 size={22} />,
    color: '#EFF6FF', textColor: '#3B82F6',
    title: 'Manage Flats',
    desc: 'Add, edit and track all your rental flats from one dashboard. Monitor occupancy and availability in real time.',
  },
  {
    icon: <CreditCard size={22} />,
    color: '#ECFDF5', textColor: '#10B981',
    title: 'Track Rent Payments',
    desc: 'View paid, pending, and overdue rent records. Get instant visibility into monthly collection status.',
  },
  {
    icon: <Wrench size={22} />,
    color: '#FEF2F2', textColor: '#EF4444',
    title: 'Handle Maintenance',
    desc: 'Tenants raise complaints directly. Owners manage and resolve them with real-time status updates.',
  },
];

export default function FeatureSection() {
  return (
    <div className="feature-section">
      <div className="section-center">
        <span className="section-tag">Why FlatEase</span>
        <h2 className="section-title">Everything you need to manage rentals</h2>
        <p className="section-sub">
          A complete property management platform for flat owners and tenants.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon" style={{ background: f.color }}>
              <span style={{ color: f.textColor }}>{f.icon}</span>
            </div>
            <h3 className="feature-card-title">{f.title}</h3>
            <p className="feature-card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

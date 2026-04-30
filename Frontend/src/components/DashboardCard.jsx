export default function DashboardCard({ icon, label, value, footer, color = '#F3F4F6', textColor = '#111827' }) {
  return (
    <div className="stat-card">
      <div className="stat-card-icon" style={{ background: color }}>
        <span style={{ color: textColor }}>{icon}</span>
      </div>
      <div>
        <div className="stat-card-value">{value}</div>
        <div className="stat-card-label">{label}</div>
        {footer && <div className="stat-card-footer">{footer}</div>}
      </div>
    </div>
  );
}

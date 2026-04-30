export default function StatusBadge({ status }) {
  const key = status?.toLowerCase().replace(/\s+/g, '-');
  const labels = {
    paid: 'Paid', pending: 'Pending', overdue: 'Overdue',
    open: 'Open', 'in-progress': 'In Progress', resolved: 'Resolved',
    occupied: 'Occupied', vacant: 'Vacant',
    approved: 'Approved', rejected: 'Rejected',
  };
  return (
    <span className={`badge badge-${key}`}>
      <span className="badge-dot" />
      {labels[key] || status}
    </span>
  );
}

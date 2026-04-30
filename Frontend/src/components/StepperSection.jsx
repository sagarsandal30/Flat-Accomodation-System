const steps = [
  { num: 1, label: 'Add Flat',       desc: 'List your flat with details and photos',        active: true },
  { num: 2, label: 'Assign Tenant',  desc: 'Assign verified tenants to vacant flats',       active: false },
  { num: 3, label: 'Track Rent',     desc: 'Monitor monthly payments and dues',              active: false },
  { num: 4, label: 'Manage Requests',desc: 'Handle maintenance complaints effortlessly',    active: false },
];

export default function StepperSection() {
  return (
    <div className="stepper-section">
      <div className="section-center">
        <h2 className="section-title">How FlatEase Works</h2>
        <p className="section-sub">Simple four-step process to manage your entire rental portfolio.</p>
      </div>
      <div className="stepper-row">
        <div className="stepper-line" />
        {steps.map(s => (
          <div key={s.num} className="stepper-item">
            <div className={`stepper-num ${s.active ? 'active' : 'inactive'}`}>{s.num}</div>
            <div className="stepper-label">{s.label}</div>
            <div className="stepper-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

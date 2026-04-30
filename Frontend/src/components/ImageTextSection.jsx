import { useNavigate } from 'react-router-dom';

export default function ImageTextSection() {
  return (
    <div className="it-section">
      <div className="it-container">
        <div className="it-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070')" }} />
        <div className="it-content">
          <div className="it-card">
            <h2 className="it-card-title">Own multiple flats? Manage them all in one place</h2>
            <p className="it-card-desc">
              FlatEase gives property owners a complete dashboard to track tenants, collect rent, handle maintenance, and post announcements — with zero hassle.
            </p>
            <a href="/login" className="it-link">
              Get Started as Owner →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

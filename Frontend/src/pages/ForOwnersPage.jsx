import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureSection from '../components/FeatureSection';
import StepperSection from '../components/StepperSection';
import { useNavigate } from 'react-router-dom';

export default function ForOwnersPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Navbar solid={true} />
      <main className="main-content">
        <div style={{ background: 'var(--black)', color: 'var(--white)', padding: '80px 0', textAlign: 'center' }}>
          <div className="landing-inner">
            <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: 20 }}>Smart Management for Your Properties</h1>
            <p className="hero-subtitle" style={{ margin: '0 auto 32px' }}>Everything you need to manage your rental business, from tenant assignment to automated rent tracking.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
              <button className="btn btn-black btn-lg" style={{ background: 'var(--white)', color: 'var(--black)' }} onClick={() => navigate('/register')}>Get Started Now</button>
              <button className="btn btn-outline btn-lg" style={{ background: 'transparent', color: 'var(--white)', borderColor: 'rgba(255,255,255,0.3)' }}>Watch Demo</button>
            </div>
          </div>
        </div>

        <div className="landing-inner" style={{ padding: '60px 0' }}>
          <FeatureSection />
          
          <div style={{ margin: '80px 0', background: 'var(--white)', borderRadius: 32, padding: 60, boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
            <div style={{ flex: 1 }}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Take back your time</h2>
              <p className="section-sub" style={{ textAlign: 'left', margin: 0 }}>
                Stop chasing tenants for rent or losing track of maintenance requests. 
                FlatEase automates the boring stuff so you can focus on growing your portfolio.
              </p>
              <ul style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', fontWeight: 600 }}>✅ Real-time occupancy tracking</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', fontWeight: 600 }}>✅ Digital rent receipts & history</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', fontWeight: 600 }}>✅ Centralized complaint management</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', fontWeight: 600 }}>✅ Announcement broadcasting</li>
              </ul>
            </div>
            <div style={{ flex: 1, height: 340, borderRadius: 24, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=1000" alt="Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <StepperSection />
        </div>

        <div style={{ background: 'var(--bg)', padding: '80px 0', textAlign: 'center' }}>
          <div className="landing-inner">
            <h2 className="section-title">Ready to streamline your management?</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>Join hundreds of owners who trust FlatEase to manage their properties.</p>
            <button className="btn btn-black btn-lg" onClick={() => navigate('/register')}>Create Owner Account</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

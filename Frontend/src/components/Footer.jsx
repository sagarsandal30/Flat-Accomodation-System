export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">FlatEase</div>
            <p className="footer-desc">
              A complete flat management system for property owners and tenants. Simple, fast, and reliable.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Quick Links</div>
            <div className="footer-links">
              <a href="/" className="footer-link">Home</a>
              <a href="/rent-flats" className="footer-link">Rent Flats</a>
              <a href="/for-owners" className="footer-link">For Owners</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              <a href="#" className="footer-link">Flat Listing</a>
              <a href="#" className="footer-link">Tenant Management</a>
              <a href="#" className="footer-link">Rent Tracking</a>
              <a href="#" className="footer-link">Maintenance</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-links">
              <a href="mailto:support@flatease.com" className="footer-link">support@flatease.com</a>
              <a href="tel:+919876543210" className="footer-link">+91 98765 43210</a>
              <span className="footer-link">Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 FlatEase. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

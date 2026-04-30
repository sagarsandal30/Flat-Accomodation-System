import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { flats } from '../data/dummyData';
import { Search, MapPin, Home, Wallet } from 'lucide-react';
import { useState } from 'react';

export default function RentFlatsPage() {
  const [filter, setFilter] = useState('all');
  
  const filteredFlats = filter === 'all' ? flats : flats.filter(f => f.type === filter);

  return (
    <div className="page-container">
      <Navbar solid={true} />
      <main className="main-content">
        <div className="landing-inner" style={{ paddingTop: 40, paddingBottom: 60 }}>
          <div className="section-head">
            <div>
              <h1 className="section-title" style={{ textAlign: 'left', marginBottom: 8 }}>Find Your Perfect Flat</h1>
              <p className="section-sub" style={{ textAlign: 'left', margin: 0 }}>Browse available rental flats managed by FlatEase.</p>
            </div>
          </div>

          <div className="search-box" style={{ marginBottom: 40 }}>
            <div className="search-fields">
              <div className="search-field">
                <div className="search-field-label">Location</div>
                <div className="search-field-inner">
                  <MapPin size={16} />
                  <input placeholder="Search area..." />
                </div>
              </div>
              <div className="search-field">
                <div className="search-field-label">Type</div>
                <div className="search-field-inner">
                  <Home size={16} />
                  <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All Types</option>
                    <option value="1BHK">1 BHK</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                  </select>
                </div>
              </div>
              <div className="search-field">
                <div className="search-field-label">Budget</div>
                <div className="search-field-inner">
                  <Wallet size={16} />
                  <select>
                    <option>Any Budget</option>
                    <option>Below ₹15,000</option>
                    <option>₹15,000 - ₹25,000</option>
                    <option>Above ₹25,000</option>
                  </select>
                </div>
              </div>
              <button className="search-btn">
                <Search size={16} /> Filter
              </button>
            </div>
          </div>

          <div className="pg-grid">
            {filteredFlats.map(f => (
              <PropertyCard key={f.id} flat={f} />
            ))}
          </div>

          {filteredFlats.length === 0 && (
            <div className="empty-state">
              <p>No flats found matching your search criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

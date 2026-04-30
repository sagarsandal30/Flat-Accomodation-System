import { useState } from 'react';
import { MapPin, Wallet, Home, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  return (
    <div className="search-box">
      <div className="search-box-label">
        <Search size={13} /> Search Available Flats for Rent
      </div>
      <div className="search-fields">
        <div className="search-field">
          <div className="search-field-label">Location</div>
          <div className="search-field-inner">
            <MapPin size={16} />
            <input
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="City / Area"
            />
          </div>
        </div>

        <div className="search-field">
          <div className="search-field-label">Budget</div>
          <div className="search-field-inner">
            <Wallet size={16} />
            <select value={budget} onChange={e => setBudget(e.target.value)}>
              <option value="">Any Budget</option>
              <option>Under ₹10,000</option>
              <option>₹10,000 – ₹20,000</option>
              <option>₹20,000 – ₹35,000</option>
              <option>Above ₹35,000</option>
            </select>
          </div>
        </div>

        <div className="search-field">
          <div className="search-field-label">Flat Type</div>
          <div className="search-field-inner">
            <Home size={16} />
            <select value={type} onChange={e => setType(e.target.value)}>
              <option value="">All Types</option>
              <option>1BHK</option>
              <option>2BHK</option>
              <option>3BHK</option>
            </select>
          </div>
        </div>

        <button className="search-btn" onClick={() => navigate('/rent-flats')}>
          <Search size={16} /> Search Flats
        </button>
      </div>
    </div>
  );
}

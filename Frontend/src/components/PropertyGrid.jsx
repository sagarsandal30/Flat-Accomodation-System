import { flats } from '../data/dummyData';
import PropertyCard from './PropertyCard';
import { useNavigate } from 'react-router-dom';

export default function PropertyGrid() {
  const navigate = useNavigate();
  const display = flats.slice(0, 6);
  return (
    <div className="pg-section">
      <div className="pg-header">
        <div>
          <div className="pg-title">Available Flats for Rent</div>
          <div className="pg-sub">Browse verified flats managed by FlatEase owners.</div>
        </div>
      </div>
      <div className="pg-grid">
        {display.map(f => <PropertyCard key={f.id} flat={f} />)}
      </div>
      <div className="pg-action">
        <button className="btn btn-black btn-lg" onClick={() => navigate('/rent-flats')}>
          View All Flats →
        </button>
      </div>
    </div>
  );
}

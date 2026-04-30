import { Heart, Bed, Bath, Maximize } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function PropertyCard({ flat }) {
  return (
    <div className="flat-card">
      <div className="flat-card-img-wrap">
        <img src={flat.image} alt={flat.flatNo} className="flat-card-img" />
        <span className="flat-card-badge">{flat.type}</span>
        <button className="flat-card-fav"><Heart size={14} /></button>
      </div>
      <div className="flat-card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <div className="flat-card-price">₹{flat.rent.toLocaleString()}<span>/mo</span></div>
          <StatusBadge status={flat.status} />
        </div>
        <div className="flat-card-title">{flat.flatNo} — {flat.building}</div>
        <div className="flat-card-address">{flat.address}</div>
        <div className="flat-card-features">
          <span className="flat-card-feature"><Bed size={13} /> {flat.type.replace('BHK','') } BHK</span>
          <span className="flat-card-feature"><Maximize size={13} /> {flat.area} sq ft</span>
          {flat.amenities?.slice(0,2).map(a => <span key={a} className="flat-card-feature">✦ {a}</span>)}
        </div>
      </div>
    </div>
  );
}

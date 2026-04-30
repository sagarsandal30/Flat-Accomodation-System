import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../Context/AuthContext';

export default function LoginPage() {
   const {login}=useAuth();
  const [role, setRole] = useState('owner');
  const [show, setShow] = useState(false);
  const [formData,setFormData]=useState({
    email:"",
    password:"",
    role:""
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
   setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setFormData((prev) => ({
      ...prev,
      role: selectedRole,
    }));
  }


  const   handleLogin = async (e) => {
    e.preventDefault();
//API Call:
      console.log('Logging in with:', formData);
     await login(formData);
    
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075')" }} />
        <div className="auth-left-logo">FlatEase</div>
        <div className="auth-left-content">
          <div className="auth-left-title">Manage your flats<br />with confidence.</div>
          <div className="auth-left-sub">A complete system to manage tenants, rent, and maintenance — all in one place.</div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <span className="auth-card-logo">FlatEase</span>
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-sub">Sign in to access your dashboard</p>

          <div className="auth-role-selector">
            <button className={`auth-role-btn ${role === 'owner' ? 'active' : ''}`} onClick={() => handleRoleChange('owner')}>
              🏠 Owner
              </button>
            <button className={`auth-role-btn ${role === 'tenant' ? 'active' : ''}`} onClick={() => handleRoleChange('tenant')}>
              👤 Tenant
              </button>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
              name="email"  
                value={formData.email} 
              onChange={handleChange}
               className="form-input" 
               type="email" 
               placeholder={role === 'owner' ? 'raj@flatease.com' : 'priya@gmail.com'} 
               required />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <div style={{ position: 'relative' }}>
                <input 
                name="password" 
                value={formData.password}
                 onChange={handleChange}
                 className="form-input" 
                 type={show ? 'text' : 'password'}
                  placeholder="••••••••" 
                  required 
                  style={{ paddingRight: 40 }} />
                <button type="button" onClick={() => setShow(!show)}
                  style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="auth-forgot">Forgot password?</div>
            <button type="submit" className="btn btn-black" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
              Sign In as {role === 'owner' ? 'Owner' : 'Tenant'}
            </button>
          </form>
          <div className="auth-toggle">Don't have an account? 
            <Link to="/register">
            Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

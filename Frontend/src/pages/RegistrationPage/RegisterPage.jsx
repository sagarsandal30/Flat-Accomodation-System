import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

const EMPTY_FORM={
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
    role:"tenant"
  }

export default function RegisterPage() {
  const {registerUser}=useAuth();

  const [role, setRole] = useState('tenant');
  const [formData,setFormData]=useState(EMPTY_FORM);
 const [errors,setErrors]=useState("");
   
  const navigate = useNavigate();

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setFormData((prev) => ({
      ...prev,
      role: selectedRole,
    }));
  }

 const validateForm = () => {
  const newErrors = {};

  // First Name
  if (!formData.firstName.trim()) {
    newErrors.firstName = "First name is required";
  }

  // Last Name
  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last name is required";
  }

  // Email
  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  // Phone
  if (!formData.phone) {
    newErrors.phone = "Phone is required";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone must be 10 digits";
  }

  // Password
  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  // Confirm Password
  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  return newErrors;
};
  

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
     const validationErrors = validateForm();
     if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    console.log(errors)
    return errors;
  }
   try {
    await registerUser(formData);
    navigate("/login");
  } catch (err) {
    console.error(err);
  }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=2070')" }} />
        <div className="auth-left-logo">FlatEase</div>
        <div className="auth-left-content">
          <div className="auth-left-title">Join FlatEase<br />today.</div>
          <div className="auth-left-sub">Whether you own flats or are looking to rent one, FlatEase makes it effortless.</div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <span className="auth-card-logo">FlatEase</span>
          <h1 className="auth-title">Create account</h1>
          <p className="auth-sub">Register to get started</p>

          <div className="auth-role-selector">
            <button  type="button" className={`auth-role-btn ${role === 'owner' ? 'active' : ''}`}
             onClick={() => handleRoleChange('owner')} >
              🏠 Owner
              </button>
            <button  type="button" className={`auth-role-btn ${role === 'tenant' ? 'active' : ''}`}
             onClick={() => handleRoleChange('tenant')}>
              👤 Tenant
              </button>
          </div>

          <form className="auth-form" onSubmit={handleRegister}>
            <div className="modal-grid">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input name="firstName"  value={formData.firstName}  className="form-input" placeholder="Enter Name"    onChange={handleChange}required />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input name="lastName"  value={formData.lastName} className="form-input" placeholder="Mehta"        onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input name="email" value={formData.email} className="form-input" type="email" placeholder="you@email.com" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input name="phone" value={formData.phone} className="form-input" type="tel" placeholder="+91 98765 43210"        onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input  name="password" value={formData.password} className="form-input" type="password" placeholder="Create a password"         onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label"> Confirm Password</label>
              <input  name="confirmPassword" value={formData.confirmPassword}  className="form-input" type="password" placeholder="Rewrite your password"  onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-black" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
              Register as {role === 'owner' ? 'Owner' : 'Tenant'}
            </button>
          </form>
          <div className="auth-toggle">Already have an account? <Link to="/login">Sign in</Link></div>
        </div>
      </div>
    </div>
  );
}

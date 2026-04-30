// ─── USERS ───────────────────────────────────────────────────────────────────
export const users = [
  { id: 'u1', name: 'Raj Mehta',    email: 'raj@flatease.com',    role: 'owner',  phone: '+91 98765 43210', avatar: 'RM' },
  { id: 'u2', name: 'Priya Sharma', email: 'priya@gmail.com',     role: 'tenant', phone: '+91 99001 12345', avatar: 'PS' },
  { id: 'u3', name: 'Arjun Patel',  email: 'arjun@gmail.com',     role: 'tenant', phone: '+91 91234 56789', avatar: 'AP' },
  { id: 'u4', name: 'Sneha Rao',    email: 'sneha@gmail.com',     role: 'tenant', phone: '+91 98123 45678', avatar: 'SR' },
  { id: 'u5', name: 'Karan Singh',  email: 'karan@gmail.com',     role: 'tenant', phone: '+91 97890 12345', avatar: 'KS' },
];

// ─── FLATS ────────────────────────────────────────────────────────────────────
export const flats = [
  { id: 'f1', flatNo: 'A-101', building: 'Sunrise Residency', floor: 1, type: '2BHK', area: 950, rent: 18000, status: 'occupied', tenantId: 'u2', address: '12 MG Road, Pune', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', amenities: ['WiFi', 'Parking', 'Gym'], description: 'Spacious 2BHK with modern interiors and great ventilation.' },
  { id: 'f2', flatNo: 'B-202', building: 'Sunrise Residency', floor: 2, type: '1BHK', area: 580, rent: 11000, status: 'occupied', tenantId: 'u3', address: '12 MG Road, Pune', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', amenities: ['WiFi', 'Parking'], description: 'Cozy 1BHK ideal for working professionals.' },
  { id: 'f3', flatNo: 'C-303', building: 'Green Valley Apt.', floor: 3, type: '3BHK', area: 1400, rent: 28000, status: 'occupied', tenantId: 'u4', address: '45 Baner Road, Pune', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800', amenities: ['WiFi', 'Parking', 'Gym', 'Swimming Pool'], description: 'Premium 3BHK with panoramic city views.' },
  { id: 'f4', flatNo: 'D-404', building: 'Green Valley Apt.', floor: 4, type: '2BHK', area: 980, rent: 20000, status: 'vacant', tenantId: null, address: '45 Baner Road, Pune', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800', amenities: ['WiFi', 'Parking', 'Gym'], description: 'Well-maintained 2BHK with ample storage.' },
  { id: 'f5', flatNo: 'E-501', building: 'Sunrise Residency', floor: 5, type: '1BHK', area: 550, rent: 10000, status: 'vacant', tenantId: null, address: '12 MG Road, Pune', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800', amenities: ['WiFi'], description: 'Affordable 1BHK for budget-conscious tenants.' },
  { id: 'f6', flatNo: 'F-601', building: 'Palm Grove',        floor: 6, type: '3BHK', area: 1600, rent: 32000, status: 'occupied', tenantId: 'u5', address: '78 Kalyani Nagar, Pune', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', amenities: ['WiFi', 'Parking', 'Gym', 'Swimming Pool', 'Clubhouse'], description: 'Luxury 3BHK in premium locality with all amenities.' },
];

// ─── TENANTS (extended profile) ──────────────────────────────────────────────
export const tenants = [
  { id: 't1', userId: 'u2', flatId: 'f1', name: 'Priya Sharma', email: 'priya@gmail.com', phone: '+91 99001 12345', moveInDate: '2024-01-15', leaseEnd: '2025-01-14', emergencyContact: '+91 98888 77777', occupation: 'Software Engineer', avatar: 'PS' },
  { id: 't2', userId: 'u3', flatId: 'f2', name: 'Arjun Patel',  email: 'arjun@gmail.com',  phone: '+91 91234 56789', moveInDate: '2024-03-01', leaseEnd: '2025-02-28', emergencyContact: '+91 97777 66666', occupation: 'Graphic Designer',   avatar: 'AP' },
  { id: 't3', userId: 'u4', flatId: 'f3', name: 'Sneha Rao',    email: 'sneha@gmail.com',   phone: '+91 98123 45678', moveInDate: '2023-11-10', leaseEnd: '2024-11-09', emergencyContact: '+91 96666 55555', occupation: 'Doctor',            avatar: 'SR' },
  { id: 't4', userId: 'u5', flatId: 'f6', name: 'Karan Singh',  email: 'karan@gmail.com',   phone: '+91 97890 12345', moveInDate: '2024-05-20', leaseEnd: '2025-05-19', emergencyContact: '+91 95555 44444', occupation: 'Business Analyst',   avatar: 'KS' },
];

// ─── PAYMENTS ─────────────────────────────────────────────────────────────────
export const payments = [
  { id: 'p1',  tenantId: 't1', flatId: 'f1', tenantName: 'Priya Sharma', flatNo: 'A-101', month: 'April 2026',    amount: 18000, status: 'paid',    dueDate: '2026-04-05', paidDate: '2026-04-03', method: 'Bank Transfer' },
  { id: 'p2',  tenantId: 't1', flatId: 'f1', tenantName: 'Priya Sharma', flatNo: 'A-101', month: 'March 2026',    amount: 18000, status: 'paid',    dueDate: '2026-03-05', paidDate: '2026-03-04', method: 'UPI' },
  { id: 'p3',  tenantId: 't1', flatId: 'f1', tenantName: 'Priya Sharma', flatNo: 'A-101', month: 'May 2026',      amount: 18000, status: 'pending', dueDate: '2026-05-05', paidDate: null,          method: null },
  { id: 'p4',  tenantId: 't2', flatId: 'f2', tenantName: 'Arjun Patel',  flatNo: 'B-202', month: 'April 2026',    amount: 11000, status: 'paid',    dueDate: '2026-04-05', paidDate: '2026-04-07', method: 'UPI' },
  { id: 'p5',  tenantId: 't2', flatId: 'f2', tenantName: 'Arjun Patel',  flatNo: 'B-202', month: 'May 2026',      amount: 11000, status: 'pending', dueDate: '2026-05-05', paidDate: null,          method: null },
  { id: 'p6',  tenantId: 't3', flatId: 'f3', tenantName: 'Sneha Rao',    flatNo: 'C-303', month: 'April 2026',    amount: 28000, status: 'overdue', dueDate: '2026-04-05', paidDate: null,          method: null },
  { id: 'p7',  tenantId: 't3', flatId: 'f3', tenantName: 'Sneha Rao',    flatNo: 'C-303', month: 'March 2026',    amount: 28000, status: 'paid',    dueDate: '2026-03-05', paidDate: '2026-03-06', method: 'Bank Transfer' },
  { id: 'p8',  tenantId: 't4', flatId: 'f6', tenantName: 'Karan Singh',  flatNo: 'F-601', month: 'April 2026',    amount: 32000, status: 'paid',    dueDate: '2026-04-05', paidDate: '2026-04-02', method: 'Cheque' },
  { id: 'p9',  tenantId: 't4', flatId: 'f6', tenantName: 'Karan Singh',  flatNo: 'F-601', month: 'May 2026',      amount: 32000, status: 'pending', dueDate: '2026-05-05', paidDate: null,          method: null },
  { id: 'p10', tenantId: 't1', flatId: 'f1', tenantName: 'Priya Sharma', flatNo: 'A-101', month: 'February 2026', amount: 18000, status: 'paid',    dueDate: '2026-02-05', paidDate: '2026-02-04', method: 'UPI' },
];

// ─── MAINTENANCE REQUESTS ──────────────────────────────────────────────────────
export const maintenanceRequests = [
  { id: 'm1', tenantId: 't1', flatId: 'f1', tenantName: 'Priya Sharma', flatNo: 'A-101', category: 'Plumbing',     title: 'Leaking tap in bathroom',         description: 'The main bathroom tap has been leaking since yesterday. Need urgent repair.', status: 'resolved',    priority: 'high',   raisedOn: '2026-04-10', resolvedOn: '2026-04-12', assignedTo: 'Maintenance Team' },
  { id: 'm2', tenantId: 't2', flatId: 'f2', tenantName: 'Arjun Patel',  flatNo: 'B-202', category: 'Electrical',   title: 'Power fluctuation in kitchen',    description: 'The kitchen lights flicker frequently and one socket stopped working.', status: 'in-progress', priority: 'medium', raisedOn: '2026-04-22', resolvedOn: null,         assignedTo: 'Electrician' },
  { id: 'm3', tenantId: 't3', flatId: 'f3', tenantName: 'Sneha Rao',    flatNo: 'C-303', category: 'Carpentry',    title: 'Broken wardrobe door hinge',      description: 'The hinge of the master bedroom wardrobe door is broken.', status: 'open',        priority: 'low',    raisedOn: '2026-04-28', resolvedOn: null,         assignedTo: null },
  { id: 'm4', tenantId: 't4', flatId: 'f6', tenantName: 'Karan Singh',  flatNo: 'F-601', category: 'Housekeeping', title: 'Common area cleaning required',   description: 'The hallway on 6th floor has not been cleaned for 3 days.', status: 'in-progress', priority: 'medium', raisedOn: '2026-04-25', resolvedOn: null,         assignedTo: 'Housekeeping' },
  { id: 'm5', tenantId: 't1', flatId: 'f1', tenantName: 'Priya Sharma', flatNo: 'A-101', category: 'Plumbing',     title: 'Water heater not working',        description: 'The geyser in the bathroom stopped heating water.', status: 'open',        priority: 'high',   raisedOn: '2026-04-29', resolvedOn: null,         assignedTo: null },
  { id: 'm6', tenantId: 't2', flatId: 'f2', tenantName: 'Arjun Patel',  flatNo: 'B-202', category: 'Pest Control', title: 'Cockroach infestation in kitchen', description: 'Noticed cockroaches in the kitchen area. Need pest control urgently.', status: 'open',        priority: 'high',   raisedOn: '2026-04-30', resolvedOn: null,         assignedTo: null },
];

// ─── ANNOUNCEMENTS ────────────────────────────────────────────────────────────
export const announcements = [
  { id: 'a1', title: 'Maintenance Shutdown – Water Supply', body: 'Due to plumbing maintenance work, water supply will be shut down on May 2, 2026 from 9 AM to 2 PM. Please store water accordingly.', postedBy: 'Owner', postedOn: '2026-04-28', target: 'all', priority: 'high' },
  { id: 'a2', title: 'Rent Due Reminder – May 2026',        body: 'Please ensure your May 2026 rent is paid before May 5th to avoid late fees. Bank transfer and UPI payments are accepted.', postedBy: 'Owner', postedOn: '2026-04-25', target: 'all', priority: 'medium' },
  { id: 'a3', title: 'Parking Slot Reallocation',           body: 'Parking slots have been reallocated for Sunrise Residency. Please check the notice board at the entrance for your updated slot number.', postedBy: 'Owner', postedOn: '2026-04-20', target: 'sunrise', priority: 'low' },
  { id: 'a4', title: 'Society Meeting – Saturday, May 3',   body: 'A society meeting is scheduled for May 3, 2026 at 6:30 PM in the community hall. Attendance is encouraged.', postedBy: 'Owner', postedOn: '2026-04-18', target: 'all', priority: 'low' },
];

// ─── BOOKING REQUESTS ─────────────────────────────────────────────────────────
export const bookingRequests = [
  { id: 'b1', name: 'Amit Desai',  email: 'amit@gmail.com', phone: '+91 92222 33333', flatId: 'f4', flatNo: 'D-404', flatType: '2BHK', message: 'I am a working professional looking for a 2BHK near Baner.', status: 'pending',  appliedOn: '2026-04-28' },
  { id: 'b2', name: 'Reena Shah',  email: 'reena@gmail.com', phone: '+91 93333 44444', flatId: 'f5', flatNo: 'E-501', flatType: '1BHK', message: 'Looking for a 1BHK as a solo resident. Employed at Infosys.',  status: 'approved', appliedOn: '2026-04-25' },
  { id: 'b3', name: 'Vijay Kumar', email: 'vijay@gmail.com', phone: '+91 94444 55555', flatId: 'f4', flatNo: 'D-404', flatType: '2BHK', message: 'Family of 3 looking for a spacious 2BHK.',                       status: 'rejected', appliedOn: '2026-04-20' },
];

// ─── DASHBOARD STATS ──────────────────────────────────────────────────────────
export const ownerStats = {
  totalFlats: flats.length,
  occupiedFlats: flats.filter(f => f.status === 'occupied').length,
  vacantFlats: flats.filter(f => f.status === 'vacant').length,
  totalTenants: tenants.length,
  pendingPayments: payments.filter(p => p.status === 'pending' || p.status === 'overdue').length,
  openComplaints: maintenanceRequests.filter(m => m.status === 'open').length,
  totalRevenue: payments.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0),
};

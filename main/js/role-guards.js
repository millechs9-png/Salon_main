// Role Guards for Protected Pages
// Add to head of protected HTML: <script src="js/auth.js"></script><script src="js/role-guards.js"></script>

document.addEventListener('DOMContentLoaded', function() {
  // Auto-detect page
  const path = window.location.pathname;
  let requiredRole = 'customer';
  if (path.includes('staff.html')) requiredRole = 'staff';
  else if (path.includes('admin')) requiredRole = 'admin';
  else if (path.includes('appointment.html') || path.includes('mybookings.html') || path.includes('myreviews.html') || path.includes('account.html')) requiredRole = 'customer';

  if (!AUTH.isLoggedIn() || AUTH.getRole() !== requiredRole) {
    alert('Login required with correct role.');
    window.location.href = 'login.html';
  }
});

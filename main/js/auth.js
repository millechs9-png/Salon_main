// Salon Auth - LocalStorage Demo (plain pass - demo only, insecure for prod)

const AUTH = {
  init() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Migrate/update pre-registered accounts without wiping user data
    const preRegMap = {
      'macoysalon@gmail.com': { id: 1, name: 'Macoy Veloso', password: 'abcd1234', role: 'admin' },
      'macoystaff@gmail.com': { id: 2, name: 'Manny Orale', password: '1234abcd', role: 'staff' },
      'juandelacruz@email.com': { id: 3, name: 'Juan Dela Cruz', password: 'customer1234', role: 'customer' }
    };

    // Remove old staff email if present
    users = users.filter(u => u.email !== 'staff@macoysalon.com');

    // Ensure pre-registered accounts exist and are up-to-date
    Object.entries(preRegMap).forEach(([email, data]) => {
      const idx = users.findIndex(u => u.email === email);
      if (idx === -1) {
        users.push({ email, ...data });
      } else {
        users[idx] = { ...users[idx], ...data };
      }
    });

    localStorage.setItem('users', JSON.stringify(users));
    if (!localStorage.getItem('userBookings')) {
      localStorage.setItem('userBookings', JSON.stringify({}));
    }
  },

  login(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error('Invalid credentials');
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  },

  register(name, email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) throw new Error('User already exists');
    const newUser = {
      id: Date.now(),
      name,
      email,
      password, // plain - demo
      role: 'customer'
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return newUser;
  },

  logout() {
    localStorage.removeItem('currentUser');
  },

  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem('currentUser') || 'null');
    } catch {
      return null;
    }
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  getRole() {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  },

  requireRole(requiredRole) {
    const role = this.getRole();
    if (!role || role !== requiredRole) {
      alert('Access denied. Wrong role.');
      window.location.href = 'customer/login.html';
      return false;
    }
    return true;
  },

  protectPage() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },

  getUserBookings() {
    const userId = this.getCurrentUser()?.id;
    if (!userId) return [];
    const allBookings = JSON.parse(localStorage.getItem('userBookings') || '{}');
    return allBookings[userId] || [];
  },

  addBooking(booking) {
    const userId = this.getCurrentUser()?.id;
    if (!userId) return;
    const allBookings = JSON.parse(localStorage.getItem('userBookings') || '{}');
    if (!allBookings[userId]) allBookings[userId] = [];
    allBookings[userId].push(booking);
    localStorage.setItem('userBookings', JSON.stringify(allBookings));
  }
};

// Auto init
AUTH.init();


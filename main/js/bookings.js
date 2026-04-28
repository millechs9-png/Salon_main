// Shared booking utilities for lifecycle management
// Admin/separate UIs can use getConfirmedBookings(), getHistoryBookings()

// Get all bookings from localStorage
function getAllBookings() {
  try {
    return JSON.parse(localStorage.getItem('userBookings') || '[]');
  } catch (e) {
    console.error('Error loading bookings:', e);
    return [];
  }
}

// Save all bookings to localStorage
function saveAllBookings(bookings) {
  try {
    localStorage.setItem('userBookings', JSON.stringify(bookings));
  } catch (e) {
    console.error('Error saving bookings:', e);
  }
}

// Update booking status (admin use)
function updateBookingStatus(bookingId, newStatus) {
  let bookings = getAllBookings();
  const booking = bookings.find(b => b.bookingId === bookingId);
  if (booking) {
    booking.status = newStatus;
    booking.updatedAt = new Date().toISOString();
    saveAllBookings(bookings);
    return true;
  }
  return false;
}

// Cancel booking (user use)
function cancelBooking(bookingId) {
  let bookings = getAllBookings();
  bookings = bookings.filter(b => b.bookingId !== bookingId);
  saveAllBookings(bookings);
  return true;
}

// Connectors for separate UIs
function getPendingBookings() {
  return getAllBookings().filter(b => b.status === 'pending');
}

function getConfirmedBookings() {
  return getAllBookings().filter(b => b.status === 'confirmed');
}

function getHistoryBookings() {
  return getAllBookings().filter(b => b.status === 'completed');
}

// For mybookings.html render
function renderBookingItem(booking) {
  let iconClass = 'bx bx-calendar-check';
  let statusClass = 'confirmed';
  let statusText = 'Confirmed';

  if (booking.status === 'pending') {
    iconClass = 'bx bx-calendar-clock';
    statusClass = 'pending';
    statusText = 'Pending Approval';
  } else if (booking.status === 'completed') {
    iconClass = 'bx bx-check-circle';
    statusClass = 'completed';
    statusText = 'Completed';
  }

  const date = new Date(booking.date).toLocaleDateString('en-US', { 
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' 
  });

  return `
    <div class="booking-item" data-booking-id="${booking.bookingId}">
      <div class="booking-icon ${statusClass}">
        <i class="${iconClass}"></i>
      </div>
      <div class="booking-content">
        <h4>${booking.services.map(s => s.name).join(' + ')}<br>#${booking.bookingId}</h4>
        <p>${date} at ${booking.time} with ${booking.stylist || 'TBD'}</p>
        <div class="booking-status ${statusClass}">${statusText}</div>
        <span class="booking-price">₱${booking.totalCost?.toFixed(0) || '0'}</span>
      </div>
      <div class="booking-actions">
        ${booking.status === 'pending' 
          ? `<button class="btn-cancel" onclick="cancelBooking('${booking.bookingId}')">Cancel</button>` 
          : `
            <button class="btn-view">View Details</button>
            <button class="btn-cancel">Rebook</button>
          `}
      </div>
    </div>
  `;
}

// Load and categorize for mybookings.html
function loadMyBookings() {
  const bookings = getAllBookings();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const pending = bookings.filter(b => b.status === 'pending');
  const confirmed = bookings.filter(b => b.status === 'confirmed');
  const history = bookings.filter(b => b.status === 'completed');

  // Render sections
  document.querySelector('.booking-section[data-type="pending"]').innerHTML = 
    pending.length ? pending.map(renderBookingItem).join('') : '<p class="no-bookings">No pending bookings</p>';
  
  document.querySelector('.booking-section[data-type="confirmed"]').innerHTML = 
    confirmed.length ? confirmed.map(renderBookingItem).join('') : '<p class="no-bookings">No confirmed bookings</p>';
  
  document.querySelector('.booking-section[data-type="history"]').innerHTML = 
    history.length ? history.map(renderBookingItem).join('') : '<p class="no-bookings">No history yet</p>';

  // Hide empty state if any bookings
  const emptyState = document.getElementById('emptyBookingsState');
  if (bookings.length > 0) {
    emptyState.style.display = 'none';
  }
}

// Expose globals for onclick
window.cancelBooking = function(bookingId) {
  if (confirm('Cancel this booking?')) {
    cancelBooking(bookingId);
    loadMyBookings(); // Refresh
  }
};


// Data models
let bookings = JSON.parse(localStorage.getItem('bookings')) || [
    {id: 1, customer: 'John Doe', date: '2024-10-15', service: 'Haircut', status: 'pending'},
    {id: 2, customer: 'Jane Smith', date: '2024-10-16', service: 'Manicure', status: 'pending'}
];

let cancellations = JSON.parse(localStorage.getItem('cancellations')) || [
    {id: 1, customer: 'John Doe', bookingId: 1, reason: 'Schedule conflict', status: 'pending'}
];

let walkins = JSON.parse(localStorage.getItem('walkins')) || [];

// Save to localStorage
function saveData() {
    localStorage.setItem('bookings', JSON.stringify(bookings));
    localStorage.setItem('cancellations', JSON.stringify(cancellations));
    localStorage.setItem('walkins', JSON.stringify(walkins));
}

// Show section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    if (sectionId === 'bookings') renderBookings();
    if (sectionId === 'cancellations') renderCancellations();
    if (sectionId === 'walkins') renderWalkins();
}

// Render bookings table
function renderBookings() {
    const tbody = document.querySelector('#bookingsTable tbody');
    tbody.innerHTML = '';
    bookings.filter(b => b.status === 'pending').forEach(booking => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td data-label="ID">${booking.id}</td>
            <td data-label="Customer">${booking.customer}</td>
            <td data-label="Date">${booking.date}</td>
            <td data-label="Service">${booking.service}</td>
            <td data-label="Status"><span class="status status-${booking.status}">${booking.status.toUpperCase()}</span></td>
            <td data-label="Actions">
                <button class="btn-approve" onclick="updateStatus('bookings', ${booking.id}, 'approved')">Approve</button>
                <button class="btn-reject" onclick="updateStatus('bookings', ${booking.id}, 'rejected')">Reject</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Render cancellations
function renderCancellations() {
    const tbody = document.querySelector('#cancellationsTable tbody');
    tbody.innerHTML = '';
    cancellations.filter(c => c.status === 'pending').forEach(cancel => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td data-label="ID">${cancel.id}</td>
            <td data-label="Customer">${cancel.customer}</td>
            <td data-label="Booking ID">${cancel.bookingId}</td>
            <td data-label="Reason">${cancel.reason}</td>
            <td data-label="Status"><span class="status status-${cancel.status}">${cancel.status.toUpperCase()}</span></td>
            <td data-label="Actions">
                <button class="btn-approve" onclick="updateStatus('cancellations', ${cancel.id}, 'approved')">Approve</button>
                <button class="btn-reject" onclick="updateStatus('cancellations', ${cancel.id}, 'rejected')">Reject</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Render walk-ins
function renderWalkins() {
    const tbody = document.querySelector('#walkinsTable tbody');
    tbody.innerHTML = '';
    walkins.filter(w => w.status === 'pending').forEach(walkin => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td data-label="ID">${walkin.id}</td>
            <td data-label="Customer">${walkin.customer}</td>
            <td data-label="Phone">${walkin.phone}</td>
            <td data-label="Service">${walkin.service}</td>
            <td data-label="Status"><span class="status status-${walkin.status}">${walkin.status.toUpperCase()}</span></td>
            <td data-label="Actions">
                <button class="btn-approve" onclick="updateStatus('walkins', ${walkin.id}, 'approved')">Serve</button>
                <button class="btn-reject" onclick="updateStatus('walkins', ${walkin.id}, 'rejected')">Reject</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Update status
function updateStatus(type, id, newStatus) {
    let data;
    if (type === 'bookings') data = bookings;
    else if (type === 'cancellations') data = cancellations;
    else if (type === 'walkins') data = walkins;

    const item = data.find(item => item.id === id);
    if (item) {
        item.status = newStatus;
        saveData();
        // Re-render current section
        if (type === 'bookings') renderBookings();
        if (type === 'cancellations') renderCancellations();
        if (type === 'walkins') renderWalkins();
    }
}

// Walk-in form submit
document.getElementById('walkinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newWalkin = {
        id: Date.now(),
        customer: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        email: document.getElementById('customerEmail').value,
        service: document.getElementById('serviceNeeded').value,
        notes: document.getElementById('notes').value,
        status: 'pending'
    };
    walkins.push(newWalkin);
    saveData();
    renderWalkins();
    this.reset();
});

// Init
document.addEventListener('DOMContentLoaded', function() {
    showSection('bookings');
    saveData(); // Initial save
});

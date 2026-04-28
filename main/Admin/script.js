
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

// Restore dark mode from localStorage on page load
if (localStorage.getItem('darkMode') === 'true') {
	document.body.classList.add('dark');
	if (switchMode) switchMode.checked = true;
}

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
		localStorage.setItem('darkMode', 'true');
	} else {
		document.body.classList.remove('dark');
		localStorage.setItem('darkMode', 'false');
	}
})

// Booking Management for Team Page
let bookings = JSON.parse(localStorage.getItem('bookings')) || [
  {
    id: 1,
    customer: 'John Doe',
    avatar: 'people.png',
    service: 'Hair Straightening',
    datetime: '2024-10-15 10:00 AM',
    status: 'pending'
  },
  {
    id: 2,
    customer: 'Jane Smith',
    avatar: 'people.png',
    service: 'Hair Coloring',
    datetime: '2024-10-15 2:00 PM',
    status: 'pending'
  },
  {
    id: 3,
    customer: 'Mike Johnson',
    avatar: 'people.png',
    service: 'Haircut & Style',
    datetime: '2024-10-16 11:00 AM',
    status: 'pending'
  },
  {
    id: 4,
    customer: 'Sarah Wilson',
    avatar: 'people.png',
    service: 'Perm',
    datetime: '2024-10-16 3:00 PM',
    status: 'cancelled'  // Customer cancelled
  }
];

function getStatusClass(status) {
  switch(status) {
    case 'approved': return 'status approved';
    case 'rejected': return 'status rejected';
    case 'cancelled': return 'status cancelled';
    case 'pending': return 'status pending';
    default: return 'status pending';
  }
}

function renderBookings() {
  const tbody = document.querySelector('#team-bookings tbody');
  if (!tbody) return;

  tbody.innerHTML = bookings.map(booking => `
    <tr>
      <td>
        <img src="${booking.avatar}">
        <p>${booking.customer}</p>
      </td>
      <td>${booking.service}</td>
      <td>${booking.datetime}</td>
      <td><span class="${getStatusClass(booking.status)}">${booking.status.toUpperCase()}</span></td>
      <td>
        ${booking.status === 'pending' ? `
          <button class="btn-approve" onclick="handleAction(${booking.id}, 'approve')">
            <i class='bx bx-check'></i> Approve
          </button>
          <button class="btn-reject" onclick="handleAction(${booking.id}, 'reject')">
            <i class='bx bx-x'></i> Reject
          </button>
        ` : ''}
        ${booking.status === 'cancelled' ? '<span class="cancel-notice">Customer Cancelled</span>' : ''}
      </td>
    </tr>
  `).join('');
}

function handleAction(id, action) {
  const booking = bookings.find(b => b.id === id);
  if (booking && booking.status === 'pending') {
    booking.status = action;
    localStorage.setItem('bookings', JSON.stringify(bookings));
    renderBookings();
    // Optional: Show notification
    alert(`${action.toUpperCase()} booking for ${booking.customer}`);
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('#team-bookings')) {
    renderBookings();
  }
});


details
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/MediaQuery.css">
    <script src="https://kit.fontawesome.com/7a6c6b42a6.js" crossorigin="anonymous"></script>
    <title>Search Results - Macoy Salon</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 1200px; margin: 0 auto; }
        header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 30px 20px; border-radius: 20px; margin-bottom: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        h1 { font-size: 2.2rem; margin-bottom: 5px; }
        .query { font-size: 1.1rem; opacity: 0.9; }
        .back-link { color: #fff; text-decoration: none; margin-top: 10px; display: inline-block; padding: 10px 20px; background: rgba(255,255,255,0.2); border-radius: 25px; transition: 0.3s; }
        .back-link:hover { background: rgba(255,255,255,0.3); }
        .results { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; }
        .service-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.1); transition: 0.3s; opacity: 0; animation: fadeIn 0.6s forwards; }
        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }
        .service-card:nth-child(4) { animation-delay: 0.4s; }
        .service-card:nth-child(5) { animation-delay: 0.5s; }
        .service-card:nth-child(6) { animation-delay: 0.6s; }
        .service-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.15); }
        .service-image { width: 100%; height: 250px; object-fit: cover; }
        .service-info { padding: 25px; }
        .service-name { font-size: 1.5rem; color: #333; margin-bottom: 10px; font-weight: 600; }
        .service-desc { color: #666; line-height: 1.6; }
        .no-results { text-align: center; padding: 60px 20px; color: #666; font-size: 1.2rem; }
        @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { .results { grid-template-columns: 1fr; gap: 20px; } h1 { font-size: 1.8rem; } }
    </style>
</head>
    <body>
        <!-- SIDEBAR -->
		<section id="sidebar">
			<a href="#" class="brand">
				<img src="img/logo.png" alt="Logo" class="logo-image" style="height: 5rem; width: auto; border-radius: 50%; padding: 1.4rem;">
			</a>
			<ul class="side-menu top">
				<li class="active">
					<a href="home.html">
						<i class='bx bxs-home' ></i>
						<span class="text">Home</span>
					</a>
				</li>
				<li class="logged-in-only">
					<a href="notification.html">
						<i class='bx bxs-bell' ></i>
						<span class="text">Notification</span>
					</a>
				</li>
                <li>
					<a href="aboutus.html">
						<i class='bx bxs-group' ></i>
						<span class="text">About Us</span>
					</a>
				</li>
				<li>
					<a href="services.html">
						<i class='bx bxs-doughnut-chart' ></i>
						<span class="text">Services</span>
					</a>
				</li>
				<li>
					<a href="portfolio.html">
						<i class='bx bxs-star' ></i>
						<span class="text">Portfolio</span>
					</a>
				</li>
				<li>
					<a href="contact.html">
						<i class='bx bxs-phone' ></i>
						<span class="text">Contact Us</span>
					</a>
				</li>
				<li class="logged-in-only">
					<a href="reviews.html">
						<i class='bx bxs-message-dots' ></i>
						<span class="text">Reviews</span>
					</a>
				</li>
				<li id="account-li" class="logged-in-only">
					<a href="account.html" class="has-dropdown">
						<i class='bx bxs-user-circle' ></i>
						<span class="text">Account</span>
						<i class='bx bx-chevron-down dropdown-icon'></i>
					</a>
					<ul class="drop-menu">
						<li>
							<a href="account.html">
								<i class='bx bxs-user' ></i>
								<span class="text">Profile</span>
							</a>
						</li>
						<li>
							<a href="mybookings.html">
								<i class='bx bxs-calendar-check' ></i>
								<span class="text">My Bookings</span>
							</a>
						</li>
						<li>
							<a href="myreviews.html">
								<i class='bx bxs-cog' ></i>
								<span class="text">My Reviews</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="side-menu logged-in-only">
				<li>
					<a href="logout.html" class="logout">
						<i class='bx bxs-log-out-circle' ></i>
						<span class="text">Logout</span>
					</a>
				</li>
			</ul>
		</section>
		<!-- SIDEBAR -->

		<!-- CONTENT -->
		<section id="content">
			<!-- NAVBAR -->
			<nav>
				<i class='bx bx-menu' ></i>
				<a href="#" class="nav-link logged-in-only">My Account</a>
				<form action="#">
					<div class="form-input">
						<input type="search" placeholder="Search bookings...">
						<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
					</div>
				</form>
				<a href="appointment.html" class="appointment-btn logged-in-only">
					<i class='bx bx-calendar-plus'></i>
					<span>Book Now</span>
				</a>
				<input type="checkbox" id="switch-mode" hidden>
				<label for="switch-mode" class="switch-mode"></label>
				<a href="support.html" class="notification logged-in-only">
					<i class='bx bxs-bell' ></i>
					<span class="num">3</span>
				</a>
				<a href="#" class="profile always-visible profile-link" data-guest="login.html" data-user="profile.html">
					<i class='bx bx-user-circle profile-icon profile-guest'></i>
					<img src="img/profile-image.jpg" class="profile-img profile-user" alt="Profile">
				</a>
			</nav>
			<!-- NAVBAR -->
            <main>
                <section class="sectonFirst">
                    <div class="container">
                        <header>
                            <h1>Service Details</h1>
                            <p class="service-name-header" id="serviceNameHeader">Loading...</p>
                            <a href="javascript:history.back()" class="back-link">← Back</a>
                            <a href="search-results.html" class="view-all-link">All Services</a>
                        </header>
                        <div id="serviceContent">
                            <div class="no-service">Service not found.</div>
                        </div>
                    </div>
                </section>
            </main>

            <div class="beforefooter">
                <div class="box">
                    <div class="logo">Macoy Strengthening Beauty Salon</div>
                    <div class="bf-text">Macoy Manuel Veloso</div>
                    <p class="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam sit magni et
                         consequatur, tenetur ab doloremque totam necessitatibus inventore optio qui? Inventore vel quibusdam
                        exercitationem, nulla asperiores fugiat totam!
                    </p>

                    <div class="bf-text" style="margin-top: 1.5rem;">Follow Us</div>
                    <div class="icons">
                        <a href="https://www.facebook.com/markniel.veloso" target="_blank" class="fa-brands fa-facebook-f"></a>
                        <a href="https://www.google.com" target="_blank" class="fa-brands fa-google"></a>
                    </div>
                </div>

                <div class="box">
                    <div class="bf-text">Quick Links</div>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>

                    <div class="bf-text" style="margin-top: 1rem;">Find Us</div>
                    <div class="address">
                        Paliparan 3 Mabuhay City Subd., Blg. 123, Dasmariñas City, Cavite
                    </div>
                </div>

                <div class="box">
                    <div class="bf-text">Say Hi! </div>
                    <ul class="SayHi">
                        <li><i class="fa-solid fa-envelope contact-icon"></i><a href="index.html">info@example.com</a></li>
                        <li><i class="fa-solid fa-envelope contact-icon"></i><a href="about.html">contact@example.com</a></li>
                    </ul>

                    <div class="bf-text">Call Us</div>
                    <ul class="SayHi">
                        <li><i class="fa-solid fa-phone contact-icon"></i>Phone :+1 2334325532</li>
                        <li><i class="fa-solid fa-phone contact-icon"></i>Toll Free:+1 2334325532</li>
                        </ul>
                    </div>
                </div>

                <!-- footer  -->
                <footer>
                    <div class="fbox">Copyright &copy; 2026 Macoy Strengthening Beauty Salon</div>
                    <div class="fbox">Powered by Group 8</div>
                </footer>
        </section>

        <script>
        const urlParams = new URLSearchParams(window.location.search);
        const serviceName = urlParams.get('service') || '';
        document.getElementById('serviceNameHeader').textContent = serviceName || 'No service selected';
        document.title = serviceName ? `${serviceName} - Macoy Salon` : 'Service Details - Macoy Salon';

        const services = [
            { 
                name: 'Clean Nail Art', 
                shortDesc: 'Professional nail art for clean designs', 
                img: 'img/nailart_1.jpg',
                details: {
                    price: '₱499 - ₱999',
                    duration: '45-90 min',
                    description: 'Professional Clean Nail Art service featuring precision nail shaping, gel polish application, and custom designs. Perfect for weddings, parties, or everyday elegance. Includes full cuticle care, nail strengthening, and long-lasting finish.',
                    includes: ['Nail shaping & buffing', 'Cuticle care', 'Gel polish (any color)', 'Custom nail art (1-2 fingers free)', 'Top coat for shine & protection'],
                    stylist: 'Manny Orale',
                    rating: 4.9,
                    reviews: 127
                }
            },
            { 
                name: 'Hair Styling', 
                shortDesc: 'Styling for all hair types', 
                img: 'img/haircut_2.jpg',
                details: {
                    price: '₱399 - ₱899',
                    duration: '30-60 min',
                    description: 'Expert Hair Styling service customized for your hair type and occasion. From sleek straight to glamorous curls.',
                    includes: ['Wash & blow dry', 'Heat protection', 'Professional styling', 'Hair accessories (upon request)'],
                    stylist: 'Mark Neil Veloso',
                    rating: 4.8,
                    reviews: 89
                }
            },
            { 
                name: 'Full Body Massage', 
                shortDesc: 'Relaxing full body massage', 
                img: 'img/massage_3.jpg',
                details: {
                    price: '₱799 - ₱1,499',
                    duration: '60-90 min',
                    description: 'Complete Full Body Massage using therapeutic oils to relieve stress, improve circulation, and rejuvenate your body.',
                    includes: ['Aroma oil massage', 'Hot stone therapy', 'Scalp massage', 'Foot reflexology'],
                    stylist: 'Jaime Trinidad',
                    rating: 4.9,
                    reviews: 156
                }
            },
            { 
                name: 'Stocked Cosmetic Store', 
                shortDesc: 'Wide range of cosmetics', 
                img: 'img/cosmetics_4.jpg',
                details: {
                    price: '₱199 - ₱2,999',
                    duration: 'N/A',
                    description: 'Premium Cosmetic Store with professional-grade makeup, skincare, and beauty products at competitive prices.',
                    includes: ['Brand consultations', 'Makeup matching', 'Product testing', 'Loyalty discounts'],
                    stylist: 'Beauty Consultant',
                    rating: 4.7,
                    reviews: 67
                }
            },
            { 
                name: 'Fully Equipped Spa', 
                shortDesc: 'Complete spa experience', 
                img: 'img/spa_5.jpg',
                details: {
                    price: '₱1,299 - ₱3,499',
                    duration: '90-120 min',
                    description: 'Luxury Spa package with steam room, sauna, jacuzzi, and personalized treatments.',
                    includes: ['Steam & sauna access', 'Jacuzzi hydrotherapy', 'Body scrub', 'Facial treatment', 'Refreshments'],
                    stylist: 'Spa Team',
                    rating: 5.0,
                    reviews: 234
                }
            },
            { 
                name: 'Authorized Botox', 
                shortDesc: 'Certified Botox treatments', 
                img: 'img/botox_6.jpg',
                details: {
                    price: '₱12,999+',
                    duration: '30-45 min',
                    description: 'FDA-approved Botox injections by certified dermatologist for wrinkle reduction and facial rejuvenation.',
                    includes: ['Consultation', 'Botox injection', 'Aftercare kit', 'Follow-up appointment'],
                    stylist: 'Dr. Certified Specialist',
                    rating: 4.9,
                    reviews: 45
                }
            }
        ];

        const selectedService = services.find(s => s.name.toLowerCase() === serviceName.toLowerCase().replace(/%20/g, ' '));
        const content = document.getElementById('serviceContent');

        if (selectedService) {
            content.innerHTML = `
                <div class="service-main">
                    <img src="${selectedService.img}" alt="${selectedService.name}" class="service-image" onerror="this.src='img/logo.png'">
                    <div class="service-content">
                        <div class="service-meta">
                            <div><strong>Price</strong> ${selectedService.details.price}</div>
                            <div><strong>Duration</strong> ${selectedService.details.duration}</div>
                            <div><strong>Rating</strong> ${selectedService.details.rating}⭐ (${selectedService.details.reviews} reviews)</div>
                            <div><strong>Stylist</strong> ${selectedService.details.stylist}</div>
                        </div>
                        <div class="service-description">${selectedService.details.description}</div>
                        <div class="service-includes">
                            <strong>Includes:</strong>
                            <ul>${selectedService.details.includes.map(item => `<li>${item}</li>`).join('')}</ul>
                        </div>
                        <div class="buttons">
                            <a href="appointment.html?service=${encodeURIComponent(selectedService.name)}" class="book-btn">Book Appointment</a>
                            <a href="search-results.html" class="view-all-link" style="padding: 18px 40px; background: #4CAF50; color: white; text-decoration: none; border-radius: 30px; font-weight: 600; font-size: 1.1rem; box-shadow: 0 8px 25px rgba(76,175,80,0.4);">View All Services</a>
                        </div>
                    </div>
                </div>
            `;
        } else {
            content.innerHTML = '<div class="no-service">Service not found. <a href="search-results.html">View All Services</a></div>';
        }
        </script>
    </body>
</html>

results
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/home.css">
        <link rel="stylesheet" href="css/MediaQuery.css">
        <script src="https://kit.fontawesome.com/7a6c6b42a6.js" crossorigin="anonymous"></script>
        <title>Search Results - Macoy Salon</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh; padding: 20px; }
            .container { max-width: 1200px; margin: 0 auto; }
            header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 30px 20px; border-radius: 20px; margin-bottom: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
            h1 { font-size: 2.2rem; margin-bottom: 5px; }
            .query { font-size: 1.1rem; opacity: 0.9; }
            .back-link { color: #fff; text-decoration: none; margin-top: 10px; display: inline-block; padding: 10px 20px; background: rgba(255,255,255,0.2); border-radius: 25px; transition: 0.3s; }
            .back-link:hover { background: rgba(255,255,255,0.3); }
            .results { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; }
            .service-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.1); transition: 0.3s; opacity: 0; animation: fadeIn 0.6s forwards; }
            .service-card:nth-child(1) { animation-delay: 0.1s; }
            .service-card:nth-child(2) { animation-delay: 0.2s; }
            .service-card:nth-child(3) { animation-delay: 0.3s; }
            .service-card:nth-child(4) { animation-delay: 0.4s; }
            .service-card:nth-child(5) { animation-delay: 0.5s; }
            .service-card:nth-child(6) { animation-delay: 0.6s; }
            .service-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.15); }
            .service-image { width: 100%; height: 250px; object-fit: cover; }
            .service-info { padding: 25px; }
            .service-name { font-size: 1.5rem; color: #333; margin-bottom: 10px; font-weight: 600; }
            .service-desc { color: #666; line-height: 1.6; }
            .no-results { text-align: center; padding: 60px 20px; color: #666; font-size: 1.2rem; }
            @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
            @media (max-width: 768px) { .results { grid-template-columns: 1fr; gap: 20px; } h1 { font-size: 1.8rem; } }
        </style>
    </head>
    <body>
        <!-- SIDEBAR -->
		<section id="sidebar">
			<a href="#" class="brand">
				<img src="img/logo.png" alt="Logo" class="logo-image" style="height: 5rem; width: auto; border-radius: 50%; padding: 1.4rem;">
			</a>
			<ul class="side-menu top">
				<li class="active">
					<a href="home.html">
						<i class='bx bxs-home' ></i>
						<span class="text">Home</span>
					</a>
				</li>
				<li class="logged-in-only">
					<a href="notification.html">
						<i class='bx bxs-bell' ></i>
						<span class="text">Notification</span>
					</a>
				</li>
                <li>
					<a href="aboutus.html">
						<i class='bx bxs-group' ></i>
						<span class="text">About Us</span>
					</a>
				</li>
				<li>
					<a href="services.html">
						<i class='bx bxs-doughnut-chart' ></i>
						<span class="text">Services</span>
					</a>
				</li>
				<li>
					<a href="portfolio.html">
						<i class='bx bxs-star' ></i>
						<span class="text">Portfolio</span>
					</a>
				</li>
				<li>
					<a href="contact.html">
						<i class='bx bxs-phone' ></i>
						<span class="text">Contact Us</span>
					</a>
				</li>
				<li class="logged-in-only">
					<a href="reviews.html">
						<i class='bx bxs-message-dots' ></i>
						<span class="text">Reviews</span>
					</a>
				</li>
				<li id="account-li" class="logged-in-only">
					<a href="account.html" class="has-dropdown">
						<i class='bx bxs-user-circle' ></i>
						<span class="text">Account</span>
						<i class='bx bx-chevron-down dropdown-icon'></i>
					</a>
					<ul class="drop-menu">
						<li>
							<a href="account.html">
								<i class='bx bxs-user' ></i>
								<span class="text">Profile</span>
							</a>
						</li>
						<li>
							<a href="mybookings.html">
								<i class='bx bxs-calendar-check' ></i>
								<span class="text">My Bookings</span>
							</a>
						</li>
						<li>
							<a href="myreviews.html">
								<i class='bx bxs-cog' ></i>
								<span class="text">My Reviews</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="side-menu logged-in-only">
				<li>
					<a href="logout.html" class="logout">
						<i class='bx bxs-log-out-circle' ></i>
						<span class="text">Logout</span>
					</a>
				</li>
			</ul>
		</section>
		<!-- SIDEBAR -->

		<!-- CONTENT -->
		<section id="content">
			<!-- NAVBAR -->
			<nav>
				<i class='bx bx-menu' ></i>
				<a href="#" class="nav-link logged-in-only">My Account</a>
				<form action="search-details.html" method="GET">
					<div class="form-input">
						<input type="search" placeholder="Search bookings...">
						<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
					</div>
				</form>
				<a href="appointment.html" class="appointment-btn logged-in-only">
					<i class='bx bx-calendar-plus'></i>
					<span>Book Now</span>
				</a>
				<input type="checkbox" id="switch-mode" hidden>
				<label for="switch-mode" class="switch-mode"></label>
				<a href="support.html" class="notification logged-in-only">
					<i class='bx bxs-bell' ></i>
					<span class="num">3</span>
				</a>
				<a href="#" class="profile always-visible profile-link" data-guest="login.html" data-user="profile.html">
					<i class='bx bx-user-circle profile-icon profile-guest'></i>
					<img src="img/profile-image.jpg" class="profile-img profile-user" alt="Profile">
				</a>
			</nav>
			<!-- NAVBAR -->
            <main>
                <section class="sectonFirst">
                    <div class="container">
                        <header>
                            <h1 id="pageTitle">Search Results</h1>
                            <p class="query" id="queryDisplay">"Searching for services..."</p>
                            <a href="javascript:history.back()" class="back-link">← Back to Previous Page</a>
                        </header>
                        <div class="results" id="results"></div>
                    </div>
                </section>
            </main>

            <div class="beforefooter">
                <div class="box">
                    <div class="logo">Macoy Strengthening Beauty Salon</div>
                    <div class="bf-text"  vv.5rem;">Macoy Manuel Veloso</div>
                    <p class="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam sit magni et
                         consequatur, tenetur ab doloremque totam necessitatibus inventore optio qui? Inventore vel quibusdam
                        exercitationem, nulla asperiores fugiat totam!
                    </p>

                    <div class="bf-text" style="margin-top: 1.5rem;">Follow Us</div>
                    <div class="icons">
                        <a href="https://www.facebook.com/markniel.veloso" target="_blank" class="fa-brands fa-facebook-f"></a>
                        <a href="https://www.google.com" target="_blank" class="fa-brands fa-google"></a>
                    </div>
                </div>

                <div class="box">
                    <div class="bf-text">Quick Links</div>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>

                    <div class="bf-text" style="margin-top: 1rem;">Find Us</div>
                    <div class="address">
                        Paliparan 3 Mabuhay City Subd., Blg. 123, Dasmariñas City, Cavite
                    </div>
                </div>

                <div class="box">
                    <div class="bf-text">Say Hi! </div>
                    <ul class="SayHi">
                        <li><i class="fa-solid fa-envelope contact-icon"></i><a href="index.html">info@example.com</a></li>
                        <li><i class="fa-solid fa-envelope contact-icon"></i><a href="about.html">contact@example.com</a></li>
                    </ul>

                    <div class="bf-text">Call Us</div>
                    <ul class="SayHi">
                        <li><i class="fa-solid fa-phone contact-icon"></i>Phone :+1 2334325532</li>
                        <li><i class="fa-solid fa-phone contact-icon"></i>Toll Free:+1 2334325532</li>
                        </ul>
                    </div>
                </div>

                <!-- footer  -->
                <footer>
                    <div class="fbox">Copyright &copy; 2026 Macoy Strengthening Beauty Salon</div>
                    <div class="fbox">Powered by Group 8</div>
                </footer>
        </section>
        <script>
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('q') || '';
            document.getElementById('queryDisplay').textContent = query ? `"${query}"` : 'All Services';
            document.title = query ? `Results for "${query}" - Macoy Salon` : 'Services - Macoy Salon';
            document.getElementById('pageTitle').textContent = query ? `Results for "${query}"` : 'All Services';

            const services = [
                { 
                    name: 'Clean Nail Art', 
                    shortDesc: 'Professional nail art for clean designs', 
                    img: 'img/nailart_1.jpg',
                    details: {
                        price: '₱499 - ₱999',
                        duration: '45-90 min',
                        description: 'Professional Clean Nail Art service featuring precision nail shaping, gel polish application, and custom designs. Perfect for weddings, parties, or everyday elegance. Includes full cuticle care, nail strengthening, and long-lasting finish.',
                        includes: ['Nail shaping & buffing', 'Cuticle care', 'Gel polish (any color)', 'Custom nail art (1-2 fingers free)', 'Top coat for shine & protection'],
                        stylist: 'Manny Orale',
                        rating: 4.9,
                        reviews: 127
                    }
                },
                { 
                    name: 'Hair Styling', 
                    shortDesc: 'Styling for all hair types', 
                    img: 'img/haircut_2.jpg',
                    details: {
                        price: '₱399 - ₱899',
                        duration: '30-60 min',
                        description: 'Expert Hair Styling service customized for your hair type and occasion. From sleek straight to glamorous curls.',
                        includes: ['Wash & blow dry', 'Heat protection', 'Professional styling', 'Hair accessories (upon request)'],
                        stylist: 'Mark Neil Veloso',
                        rating: 4.8,
                        reviews: 89
                    }
                },
                { 
                    name: 'Full Body Massage', 
                    shortDesc: 'Relaxing full body massage', 
                    img: 'img/massage_3.jpg',
                    details: {
                        price: '₱799 - ₱1,499',
                        duration: '60-90 min',
                        description: 'Complete Full Body Massage using therapeutic oils to relieve stress, improve circulation, and rejuvenate your body.',
                        includes: ['Aroma oil massage', 'Hot stone therapy', 'Scalp massage', 'Foot reflexology'],
                        stylist: 'Jaime Trinidad',
                        rating: 4.9,
                        reviews: 156
                    }
                },
                { 
                    name: 'Stocked Cosmetic Store', 
                    shortDesc: 'Wide range of cosmetics', 
                    img: 'img/cosmetics_4.jpg',
                    details: {
                        price: '₱199 - ₱2,999',
                        duration: 'N/A',
                        description: 'Premium Cosmetic Store with professional-grade makeup, skincare, and beauty products at competitive prices.',
                        includes: ['Brand consultations', 'Makeup matching', 'Product testing', 'Loyalty discounts'],
                        stylist: 'Beauty Consultant',
                        rating: 4.7,
                        reviews: 67
                    }
                },
                { 
                    name: 'Fully Equipped Spa', 
                    shortDesc: 'Complete spa experience', 
                    img: 'img/spa_5.jpg',
                    details: {
                        price: '₱1,299 - ₱3,499',
                        duration: '90-120 min',
                        description: 'Luxury Spa package with steam room, sauna, jacuzzi, and personalized treatments.',
                        includes: ['Steam & sauna access', 'Jacuzzi hydrotherapy', 'Body scrub', 'Facial treatment', 'Refreshments'],
                        stylist: 'Spa Team',
                        rating: 5.0,
                        reviews: 234
                    }
                },
                { 
                    name: 'Authorized Botox', 
                    shortDesc: 'Certified Botox treatments', 
                    img: 'img/botox_6.jpg',
                    details: {
                        price: '₱12,999+',
                        duration: '30-45 min',
                        description: 'FDA-approved Botox injections by certified dermatologist for wrinkle reduction and facial rejuvenation.',
                        includes: ['Consultation', 'Botox injection', 'Aftercare kit', 'Follow-up appointment'],
                        stylist: 'Dr. Certified Specialist',
                        rating: 4.9,
                        reviews: 45
                    }
                }
            ];

            function displayResults(servicesList) {
                const container = document.getElementById('results');
                if (servicesList.length === 0) {
                    container.innerHTML = '<div class="no-results">No services found. Try different keywords.</div>';
                    return;
                }
                container.innerHTML = servicesList.map((service, index) => `
                    <div class="service-card" style="animation-delay: ${index * 0.1}s">
                        <img src="${service.img}" alt="${service.name}" class="service-image" onerror="this.src='img/logo.png'">
                        <div class="service-info">
                            <h3 class="service-name">${service.name}</h3>
                            <p class="service-desc">${service.shortDesc}</p>
                            <a href="service-details.html?service=${encodeURIComponent(service.name)}" style="display: inline-block; padding: 12px 25px; background: #667eea; color: white; text-decoration: none; border-radius: 25px; font-weight: 600; margin-top: 15px; box-shadow: 0 5px 15px rgba(102,126,234,0.4);">View Full Details</a>
                        </div>
                    </div>
                `).join('');
            }



            if (query) {
                const filtered = services.filter(s => 
                    s.name.toLowerCase().includes(query.toLowerCase()) || 
                    s.shortDesc.toLowerCase().includes(query.toLowerCase())
                );
                displayResults(filtered);
            } else {
                displayResults(services);
            }
        </script>
    </body>
</html>
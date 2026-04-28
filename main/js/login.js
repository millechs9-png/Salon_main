const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Load AUTH
document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.querySelector('.form-container.sign-in form');
    const signUpForm = document.querySelector('.form-container.sign-up form');
    const emailInputSignIn = signInForm.querySelector('input[placeholder="Email"]');
    const passInputSignIn = signInForm.querySelector('input[type="password"]');
    const nameInput = signUpForm.querySelector('input[placeholder="Name"]');
    const emailInputSignUp = signUpForm.querySelector('input[placeholder="Email"]');
    const passInputSignUp = signUpForm.querySelector('input[type="password"]');

    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            try {
                const email = emailInputSignIn.value;
                const password = passInputSignIn.value;
                if (!password) throw new Error('Password required');
                const user = AUTH.login(email, password);
                alert(`Welcome back, ${user.name}!`);
                // Role redirect
                if (user.role === 'admin') {
                    window.location.href = 'Admin/index.html';
                } else if (user.role === 'staff') {
                    window.location.href = 'Staff/staff.html';
                } else {
                    window.location.href = 'home.html';
                }
            } catch (err) {
                alert(err.message);
            }
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            try {
                const name = nameInput.value;
                const email = emailInputSignUp.value;
                const password = passInputSignUp.value;
                if (!name || !email || !password) throw new Error('All fields required');
                const user = AUTH.register(name, email, password);
                alert(`Welcome, ${user.name}!`);
                window.location.href = 'home.html';
            } catch (err) {
                alert(err.message);
            }
        });
    }
});

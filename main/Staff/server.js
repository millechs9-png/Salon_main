const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'salon-super-secret-key-2024-change-in-prod';
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Load/Save JSON file
function loadData(file) {
  try {
    const data = fs.readFileSync(path.join(__dirname, file), 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveData(file, data) {
  fs.writeFileSync(path.join(__dirname, file), JSON.stringify(data, null, 2));
}

// Init pre-reg users if empty
function initUsers() {
  let users = loadData('users.json');
  if (users.length === 0) {
    const adminPass = bcrypt.hashSync('abcd1234', SALT_ROUNDS);
    const staffPass = bcrypt.hashSync('1234abcd', SALT_ROUNDS);
    users = [
      {
        id: Date.now(),
        name: 'Macoy Veloso',
        email: 'macoysalon@gmail.com',
        password: adminPass,
        role: 'admin'
      },
      {
        id: Date.now() + 1,
        name: 'Manny Orale',
        email: 'macoystaff@gmail.com',
        password: staffPass,
        role: 'staff'
      }
    ];
    saveData('users.json', users);
  }
}

// Auth middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Routes
app.get('/api/users/current', authenticateToken, (req, res) => {
  res.json(req.user);
});

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  let users = loadData('users.json');

  // Check existing
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const hashedPass = bcrypt.hashSync(password, SALT_ROUNDS);
  const newUser = {
    id: Date.now(),
    name,
    email,
    password: hashedPass,
    role: 'customer'
  };

  users.push(newUser);
  saveData('users.json', users);

  const token = jwt.sign(newUser, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: newUser });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  let users = loadData('users.json');

  const user = users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user });
});

// Init
initUsers();

app.listen(PORT, () => {
  console.log(`Salon Auth Server running on http://localhost:${PORT}`);
  console.log(`Serve pages like http://localhost:${PORT}/customer/home.html`);
  console.log('Pre-reg: admin=macoysalon@gmail.com/abcd1234 -> admin/');
  console.log('staff=macoystaff@gmail.com/1234abcd -> staff.html');
});


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const USERS_FILE = path.join(__dirname, 'users.csv');

// Ensure users.csv exists
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, 'name,email,password,phone,city\n');
}

// Helper function to hash password
const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

// Helper function to read users
const readUsers = () => {
  const content = fs.readFileSync(USERS_FILE, 'utf-8');
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });
};

// Helper function to write user
const writeUser = (user) => {
  const hashedPassword = hashPassword(user.password);
  const userLine = `${user.name},${user.email},${hashedPassword},${user.phone},${user.city}\n`;
  fs.appendFileSync(USERS_FILE, userLine);
};

export const register = (req, res) => {
  try {
    const users = readUsers();
    
    // Check if email already exists
    if (users.some(user => user.email === req.body.email)) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    
    writeUser(req.body);
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const login = (req, res) => {
  try {
    const users = readUsers();
    const user = users.find(u => u.email === req.body.email);
    
    if (!user || user.password !== hashPassword(req.body.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Generate simple token (in production, use JWT)
    const token = crypto.randomBytes(32).toString('hex');
    
    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.city
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
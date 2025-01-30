import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
/*import connectDB from './db.js';*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();
const port =process.env.PORT ||3000;

// Middleware
/*app.use(express.json());

// Connect to the database
connectDB();
*/

// Define the port to run the server
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('Public'));

// Serve the index.html file for all GET requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'index.html','contact.html'));
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
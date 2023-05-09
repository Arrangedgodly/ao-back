const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001; // Choose a different port from your client-side app

app.use(cors()); // Enable CORS for all routes

const baseUrl = 'https://api.printful.com';
const apiKey = 'Q50RatjJJejYNTu0HXbYiBRt8JdGWINdMie00OBi';

// Create a route to proxy the Printful API request
app.get('/store/products', async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/store/products`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.get('/store/products/:id', async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}/store/products/${req.params.id}`,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching product:', error.message);
    res.status(500).json({ message: 'Error fetching product' });
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

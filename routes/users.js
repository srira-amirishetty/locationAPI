const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Not using Haversine formula 

router.get('/users', async (req, res) => {
  try {
    const { latitude, longitude, page = 1, limit = 10 } = req.query;
    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    const pageNum = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    if (isNaN(lat) || isNaN(lon) || isNaN(pageNum) || isNaN(pageSize)) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }

    const users = await User.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: [lon, lat] },
          distanceField: 'distance',
          maxDistance: 10000, // 10 km in meters
          spherical: true
        }
      },
      {
        $sort: { distance: 1 } // Sort by distance
      },
      {
        $skip: (pageNum - 1) * pageSize // For pagination
      },
      {
        $limit: pageSize // Limit results per page
      }
    ]);

    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

// Create a 2dsphere index on the location field
userSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', userSchema);

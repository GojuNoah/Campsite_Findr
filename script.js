// Get form element
const form = document.querySelector('form');

// Calculate distance between two coordinates in miles
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return Math.round(distance); // Round to nearest mile
}

// Listen for form submission
form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevents page refresh
  
  // Get user's input
  const locationInput = document.getElementById('locationInput');
  const userLocation = locationInput.value;
  
  console.log('Searching for:', userLocation);
  
  // Build the API URL with user's input
  const url = `https://nominatim.openstreetmap.org/search?q=${userLocation}&format=json&limit=1`;
  
  try {
    // Make API call
    const response = await fetch(url);
    const data = await response.json();
    
    // Extract coordinates from the response
    const result = data[0];
    const latitude = parseFloat(result.lat);
    const longitude = parseFloat(result.lon);
    
    console.log(`User Coordinates: ${latitude}, ${longitude}`);

    // Loop through each forest and calculate distance
    nationalForests.forEach(nationalForests => {
      const distance = calculateDistance(
        latitude, 
        longitude, 
        nationalForests.latitude, 
        nationalForests.longitude
      );
      console.log(`${nationalForests.name}: ${distance} miles away`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
});

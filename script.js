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
  
  // Build the API URL with user's input
  const url = `https://nominatim.openstreetmap.org/search?q=${userLocation}&format=json&limit=1&countrycodes=us`; // Limit to US results
  
  try {
    // Make API call
    const response = await fetch(url);
    const data = await response.json();

    console.log('API Response:', data); // Log the API response for debugging

    // Extract coordinates from the response
    const result = data[0];
    const latitude = parseFloat(result.lat);
    const longitude = parseFloat(result.lon);

    // Loop through each forest and calculate distance
    nationalForests.forEach(nationalForests => {
      const distance = calculateDistance(
        latitude, 
        longitude, 
        nationalForests.latitude, 
        nationalForests.longitude
      );
    });

    // After calculating distances, create array with forest + distance
    const forestsWithDistance = nationalForests.map(nationalForests => {
      const distance = calculateDistance(
        latitude, 
        longitude, 
        nationalForests.latitude, 
        nationalForests.longitude
      );
    return { ...nationalForests, distance }; // Add distance to nationalForests object
  });

    // Sort by distance (closest first)
    forestsWithDistance.sort((a, b) => a.distance - b.distance);

    // Display results on the page
    const createForestCard = (nationalForests) => {
      return `
      <div class="forestCard">
			  <img class="forestImage" src="${nationalForests.imageURL}" alt="Forest Image">
			  <h2 class="forestName">${nationalForests.name}</h2>
			  ${nationalForests.dispersedCampingAllowed && '<span class="dispersed-badge">Dispersed Camping Allowed</span>'}
			  <p class="forestDistance">${nationalForests.distance} miles away</p>
			  <p class="forestDescription">${nationalForests.description}</p>
			  <a class="forestLink" href="${nationalForests.link}" target="_blank">View Official USFS Page</a>
		  </div>`;
    };

    // Get City/State from API response for heading
    const displayLocation = result.display_name.split(',').slice(0, 2).join(', '); // Get city and state
    console.log('Display Location:', displayLocation); // Log display location for debugging
    const resultsHeading = document.getElementById('results-heading');
    resultsHeading.textContent = `National Forests Near ${displayLocation}`; // Set heading to show user's location

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = forestsWithDistance.map(createForestCard).join('');

  } catch (error) {
    console.error('Error:', error);
  }
});



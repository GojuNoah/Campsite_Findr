import calculateDistance from './utils/distance.js';
import geocode from './utils/geocode.js';

// Get form element
const form = document.querySelector('form');

let nationalForests =  [];

async function loadData() {
  try {
    const response = await fetch('./data/forests.json');
    nationalForests = await response.json();
    console.log(nationalForests);
  } catch (error) {
    console.error('Failed to load JSON:', error);
  }
}
loadData();

// Listen for form submission
form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevents page refresh
  
  // Get user's input
  const locationInput = document.getElementById('locationInput');
  const userLocation = locationInput.value;

  try {
    // Get coordinates from geocoding function
    const { latitude, longitude } = await geocode(userLocation);
    // Log coordinates for debugging
    console.log('User Coordinates:', latitude, longitude);

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

    // Get display location from geocoding function
    const { displayLocation } = await geocode(userLocation);
    // Log display location for debugging
    console.log('Display Location:', displayLocation); 
    const resultsHeading = document.getElementById('results-heading');
    // Set heading to show user's location
    resultsHeading.textContent = `National Forests Near ${displayLocation}`;

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = forestsWithDistance.map(createForestCard).join('');

  } catch (error) {
    console.error('Error:', error);
  }
});

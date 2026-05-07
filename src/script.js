import calculateDistancesFromForests from './utils/distance.js';
import geocode from './utils/geocode.js';
import createForestCard from './components/forestCard.js';

const form = document.querySelector('form');
let nationalForests =  [];

// Load JSON data on page load
async function loadData() {
  try {
    const response = await fetch('./data/forests.json');
    nationalForests = await response.json();
  } catch (error) {
    console.error('Failed to load JSON:', error);
  }
}
// Call the function to load data when the page loads
loadData();

// Listen for form submission
form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevents page refresh
  const resultsContainer = document.getElementById('results');
  resultsContainer.scrollIntoView({ behavior: 'smooth' }); // Scroll to results section
  
  resultsContainer.textContent = 'Finding camping locations...'; // Show loading message

  // Get user's input
  const locationInput = document.getElementById('locationInput');
  const userLocation = locationInput.value;

  // Form validation: Check if input is empty or gibberish
  if (!userLocation.trim()) {
    resultsContainer.textContent = 'Please enter a location.';
    return;
  }

  try {
    // Get coordinates from geocoding function
    const { latitude, longitude } = await geocode(userLocation);

    // Create array with forest + distance
    const forestsWithDistance = nationalForests.map(nationalForests => {
      const distance = calculateDistancesFromForests(
        latitude, 
        longitude, 
        nationalForests.latitude, 
        nationalForests.longitude
      );
      // Add distance to nationalForests object and return new object
      return { ...nationalForests, distance };
    });

    // Sort by distance (closest first)
    forestsWithDistance.sort((a, b) => a.distance - b.distance);

    createForestCard(forestsWithDistance);

    // Get display location from geocoding function
    const { displayLocation } = await geocode(userLocation); 
    const resultsHeading = document.getElementById('results-heading');
    // Set heading to show user's location
    resultsHeading.textContent = `National Forests Near ${displayLocation}`;
    resultsContainer.innerHTML = forestsWithDistance.map(createForestCard).join('');

  } catch (error) {
    resultsContainer.textContent = error.message; // Show error message to user
    console.error('Error:', error);
  }
});

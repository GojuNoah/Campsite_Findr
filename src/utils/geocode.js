export default async function geocode(userLocation) {
    // Build the API URL with user's input
    const url = `https://nominatim.openstreetmap.org/search?q=${userLocation}&format=json&limit=1&countrycodes=us`; // Limited to US results

    // Make API call
    const response = await fetch(url);
    const data = await response.json();

    // Extract coordinates from the response
    const result = data[0];

    if (!result) {
        throw new Error('Location not found. Please enter a valid location.');
    }

    const latitude = parseFloat(result.lat);
    const longitude = parseFloat(result.lon);

    // Get City/State from API response for heading
    const displayLocation = result.display_name.split(',').slice(0, 2).join(', ');
    return { latitude, longitude, displayLocation };
}
function initMap() {
    // Map options
    const options = {
        zoom: 12,
        center: { lat: 40.7128, lng: -74.0060 } // Default location (New York City)
    };

    // Create a new map
    const map = new google.maps.Map(document.getElementById('map'), options);

    // Add a marker
    const marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 }, // Default location (New York City)
        map: map,
        title: 'Transport Location'
    });
}

// Initialize the map when the window loads
window.onload = initMap;

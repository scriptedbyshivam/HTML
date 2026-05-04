document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');
    const foodSelect = document.getElementById('food-select');
    const locationSelect = document.getElementById('location-select');

    searchBtn.addEventListener('click', function () {
        const food = foodSelect.value;
        const location = locationSelect.value;

        if (food && location) {
            alert(`Searching for ${food} in ${location}...`);
            // You can replace this with actual search logic
        } else {
            alert("Please select both food and location.");
        }
    });
});


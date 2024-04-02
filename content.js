console.log("Check");
function toggleRecommendations() {
    const recommendations = document.getElementById('secondary');

    if (recommendations.style.display === 'none') {
        recommendations.style.display = '';
    }
    else {
        recommendations.style.display = 'none';
    }
}
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', function() {
   toggleRecommendations()
});
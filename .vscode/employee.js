document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const healthDetails = document.getElementById("healthDetails").value;
    const recommendationsList = document.getElementById("recommendationList");

    // Clear previous recommendations
    recommendationsList.innerHTML = '';

    // Generate recommendations based on input
    const recommendations = generateRecommendations(healthDetails);

    // Display recommendations
    recommendations.forEach(function(recommendation) {
        const li = document.createElement("li");
        li.textContent = recommendation;
        recommendationsList.appendChild(li);
    });
});

// Function to generate recommendations based on input
function generateRecommendations(healthDetails) {
    const recommendations = [];

    // Example logic to generate recommendations
    if (healthDetails.toLowerCase().includes("back pain")) {
        recommendations.push("1. Perform gentle stretches to relieve back tension.");
        recommendations.push("2. Consider strengthening exercises for your core.");
        recommendations.push("3. Apply heat or ice packs to the affected area.");
    } 
    else if (healthDetails.toLowerCase().includes("knee pain")) {
        recommendations.push("1. Engage in low-impact activities like swimming or cycling.");
        recommendations.push("2. Strengthen the muscles around the knee with specific exercises.");
        recommendations.push("3. Avoid high-impact activities such as running.");
    } 
    else if (healthDetails.toLowerCase().includes("neck pain")) {
        recommendations.push("1. Practice neck stretches and rotations to improve mobility.");
        recommendations.push("2. Maintain good posture, especially while sitting.");
        recommendations.push("3. Use a supportive pillow when sleeping.");
    } 
    else if (healthDetails.toLowerCase().includes("shoulder pain")) {
        recommendations.push("1. Perform shoulder stretches to increase flexibility.");
        recommendations.push("2. Strengthen shoulder muscles with resistance bands.");
        recommendations.push("3. Avoid heavy lifting until pain subsides.");
    } 
    else if (healthDetails.toLowerCase().includes("hip pain")) {
        recommendations.push("1. Incorporate hip-opening stretches into your routine.");
        recommendations.push("2. Consider physical therapy for targeted exercises.");
        recommendations.push("3. Limit activities that exacerbate hip pain.");
    } 
    else {
        recommendations.push("No specific recommendations found. Please consult a professional.");
    }

    return recommendations;
}

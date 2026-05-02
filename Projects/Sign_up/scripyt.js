// Handle form submit (you can extend this to make an AJAX call)
document.getElementById("signupForm").addEventListener("submit", function (e) {
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("Email").value.trim();
    const termsChecked = document.getElementById("terms").checked;

    if (!name || !email || !termsChecked) {
        alert("Please fill in all required fields and accept the terms.");
        e.preventDefault();
    }
});

function googleSignup() {
    alert("Redirecting to Google Sign Up...");
    // In real use case, redirect to OAuth or Google sign-in flow
}

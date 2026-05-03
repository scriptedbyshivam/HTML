function sendOTP() {
    const phoneInput = document.getElementById("phone").value;
    if (!phoneInput || phoneInput.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }

    // You can replace this with actual backend call
    alert("OTP sent to " + phoneInput);
}

function googleLogin() {
    alert("Redirecting to Google login...");
    // Simulate redirect or use real Google auth here
}

// Simulate OTP generation
const otpGeneratedAt = new Date();
console.log("OTP generated at:", otpGeneratedAt.toLocaleTimeString());






// Simulate delay (e.g., user takes 12 seconds to enter OTP)
setTimeout(() => {
  const otpSubmittedAt = new Date();
  const diffMs = otpSubmittedAt - otpGeneratedAt;
  const diffSec = Math.floor(diffMs / 1000);
  console.log("OTP submitted at:", otpSubmittedAt.toLocaleTimeString());
  console.log(`Time difference: ${diffSec} seconds`);
}, 12000); 

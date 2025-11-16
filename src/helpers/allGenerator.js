function generateOTP(length = 6) {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10 + 1000); 
  }
  return otp;
}



function otpExpireTime() {
  const future = new Date(Date.now() + 3 * 60 * 1000); 
  return future
}


module.exports = {generateOTP , otpExpireTime}
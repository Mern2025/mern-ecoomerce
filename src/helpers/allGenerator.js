function generateOTP(length = 6) {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); 
  }
  return otp;
}

function otpExpireTime() {
  const future = new Date(Date.now() + 3 * 60 * 1000); 
  return future
}

// generate slug
 const generateSlug = (title) => {
  if (!title) return "";

  return title
    .toString()
    .toLowerCase()
    .trim()
    // remove accents (á → a)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    // replace non-letter/number with hyphen
    .replace(/[^a-z0-9]+/g, "-")
    // remove double hyphens
    .replace(/--+/g, "-")
    // remove starting/ending hyphens
    .replace(/^-+|-+$/g, "");
};


module.exports = {generateOTP , otpExpireTime, generateSlug}
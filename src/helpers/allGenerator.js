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

// SKU generator
const generateSKU = (title = "") => {
  // create 3-letter prefix from title
  const prefix = title
    .toString()
    .trim()
    .toUpperCase()
    .replace(/[^A-Z]/g, "") // remove non-letters
    .slice(0, 3) || "SKU";

  // 6-digit random number
  const randomNumber = Math.floor(100000 + Math.random() * 900000);

  return `${prefix}-${randomNumber}`;
};



module.exports = {generateOTP , otpExpireTime, generateSlug,generateSKU}
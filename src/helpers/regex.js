const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`])[A-Za-z\d!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]{6,15}$/;


module.exports = {emailRegex, passwordRegex}


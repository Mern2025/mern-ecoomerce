const otpTemplate = (userName, otp)=>{

return    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification Email</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica', 'Arial', sans-serif;
      background-color: #f5f5f5;
      color: #333333;
    }

    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      padding: 30px 20px;
    }

    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e0e0;
    }

    .header h1 {
      font-size: 24px;
      color: #2575fc;
      margin: 0;
    }

    .body {
      text-align: center;
      padding: 20px 0;
    }

    .body p {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 25px;
    }

    .otp-code {
      display: inline-block;
      font-size: 28px;
      letter-spacing: 5px;
      padding: 15px 25px;
      border-radius: 8px;
      background-color: #f0f4ff;
      color: #2575fc;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .verify-btn {
      display: inline-block;
      background-color: #2575fc;
      color: #ffffff;
      text-decoration: none;
      padding: 12px 30px;
      border-radius: 8px;
      font-weight: 500;
      font-size: 16px;
      transition: background 0.3s ease;
    }

    .verify-btn:hover {
      background-color: #1b5edb;
    }

    .footer {
      text-align: center;
      font-size: 14px;
      color: #888888;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
    }

    @media(max-width: 500px){
      .otp-code {
        font-size: 24px;
        padding: 12px 20px;
      }
      .verify-btn {
        width: 80%;
        display: inline-block;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>!HELLO ${userName}</h1>
    </div>

    <div class="body">
      <p>Hello,</p>
      <p>Use the following One-Time Password (OTP) to complete your verification process. This OTP is valid for <strong>3 minutes</strong>.</p>

      <div class="otp-code">${otp}</div> <!-- Replace 1234 dynamically -->

      <p>
        <a href="#" class="verify-btn">Verify OTP</a>
      </p>

      <p>If you did not request this, please ignore this email.</p>
    </div>

    <div class="footer">
      &copy; 2025 Your Company. All rights reserved.
    </div>
  </div>
</body>
</html>
`

    
}

module.exports = {otpTemplate}
SudoSecure is here to help you check if your password is both strong and unique, by using HIBP API to cross reference your passwords with known data breaches and “zxcvbn” to evaluate passwords, to give a comprehensive evaluation of your passwords and how you can improve if said password fails to meet proper standards.

Features:
- Password strength scoring with `zxcvbn`
- HIBP k-anonymity check against known leaked passwords
- Real-time strength evaluation in the React frontend
- Ways to improve password
- Breach detection / alert 

Tools:
-Fronend: React, JSX, CSS
-Backend: Python, Flask, Flask-CORS
-APIs: zxcvbn, Have I been Pwnd Password DB

Dependencies:
https://gitforwindows.org/
https://nodejs.org/en/download

Installation & Setup:
Git clone https://github.com/Obedozah/SudoSecure.git

Step 1: Backend 
-cd backend
-python -m venv venv
-venv\Scripts\activate
-pip install flask
-pip install flask-cors
-pip install zxcvbn
-pip install requests
-Python app.py

Step 2: Front end
-cd frontend
-npm install
-npm start

Usage:
Open the website at “http://localhost:3000”
Enter a password in the input field.
The app will:
Display a strength score and feedback in real time
Show whether the password has been found in known data breaches

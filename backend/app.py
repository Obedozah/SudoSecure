from flask import Flask, request, jsonify
from flask_cors import CORS
from zxcvbn import zxcvbn
import hashlib
import requests

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

HIBP_API_URL = "https://api.pwnedpasswords.com/range/"

def check_pwned_password(password):
    # Hash the password using SHA-1
    sha1_password = hashlib.sha1(password.encode('utf-8')).hexdigest().upper()
    prefix = sha1_password[:5]
    suffix = sha1_password[5:]

    # Query the HIBP API
    response = requests.get(HIBP_API_URL + prefix)
    if response.status_code != 200:
        raise Exception("Error fetching data from HIBP API")

    # Check if the suffix is in the returned hashes
    hashes = (line.split(':') for line in response.text.splitlines())
    for h, count in hashes:
        if h.strip().upper() == suffix:
            return int(count)
    return 0 # Not found

@app.route('/check_password', methods=['POST'])
def check_password():
    data = request.get_json()
    password = data.get('password')
    print(f"Received password for checking: {password}")
    result = zxcvbn(password)

    #saving password details to variables
    passScore = result['score']
    feedback = result['feedback']['suggestions']
    passTime = result['crack_times_seconds']['offline_slow_hashing_1e4_per_second']
    time_unit = "seconds"
    matched_words = result.get('sequence', [])
    words = []

    #booleans for the data
    if(passTime > 60):
        passTime = passTime / 60  #convert to minutes
        time_unit = "minutes"
        if(passTime > 60):
            passTime = passTime / 60  #convert to hours
            time_unit = "hours"
            if(passTime > 24):
                passTime = passTime / 24  #convert to days
                time_unit = "days"
                if(passTime > 365):
                    passTime = passTime / 365  #convert to years
                    time_unit = "years"
    passTime = round(passTime, 2)
    
    if(passScore == 0):
        passScore = "Not a Password"
    elif(passScore == 1):
        passScore = "Weak"
    elif(passScore == 2):
        passScore = "Okay"
    elif(passScore == 3):
        passScore = "Good"
    elif(passScore == 4):
        passScore = "Strong"

    # Check if the password has been pwned
    pwnedCount = check_pwned_password(password)

    #testing output to terminal
    print(f"testtime: {feedback}")
    print(f"Pwned Count: {pwnedCount}")
    print(f"Score: {passScore}")
    print(f"Crack Time (seconds): {passTime} {time_unit}")
    for item in matched_words:
        print(f"Matched Word: {item.get('matched_word', 'N/A')}, Rank: {item.get('rank', 'N/A')}")
        rank = item.get('rank')
        if rank is not None and rank < 1550:
            words.append({
                "matched_word": item.get('matched_word', 'N/A'), 
                "rank": item.get('rank', 'N/A')})

    return jsonify({"message": "Password evaluated"
                    , "passScore": passScore
                   , "passTime": passTime
                     , "time_unit": time_unit
                     , "pwnedCount": pwnedCount
                        , "feedback": feedback
                        , "words": words
                   })

if __name__ == '__main__':
    app.run(debug=True)
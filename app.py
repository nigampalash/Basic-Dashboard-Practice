from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/dashboard")
def dashboard():

    data = {
        "users": 1245,
        "revenue": 12500,
        "orders": 327,
        "visitors": 8540
    }

    return jsonify(data)


@app.route("/activities")
def activities():

    return jsonify([
        {
            "name":"John",
            "status":"Completed",
            "date":"20 Jul"
        },
        {
            "name":"Emma",
            "status":"Pending",
            "date":"19 Jul"
        },
        {
            "name":"Alex",
            "status":"Completed",
            "date":"18 Jul"
        }
    ])


if __name__ == "__main__":
    app.run(debug=True)

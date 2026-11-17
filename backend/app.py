
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        "message": "Welcome to our E-Commerce Application!",
        "status": "Backend is running"
    })

@app.route("/products")
def products():
    return jsonify([
        {"id": 1, "name": "Laptop", "price": 55000},
        {"id": 2, "name": "Mobile", "price": 25000},
        {"id": 3, "name": "Headphones", "price": 2000}
    ])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

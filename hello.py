# Instructions to run file
# 1) Open terminal and go to the directory in which this file exists
# 2) In the terminal, type: set FLASK_APP=hello.py
# 3) In the terminal, type: flask run

from flask import Flask, Response, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST', 'GET'])
def hello_world():
    # return 'Hello, World!'
    return jsonify({"data": "Hello World"})

@app.route('/analyze', methods=['POST', 'GET'])
def second():
    param = request.args.get('values')
    param = int(param)
    val = param + 20

    return jsonify({"data": val})





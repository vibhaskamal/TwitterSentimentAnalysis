# Instructions to run file
# 1) Open terminal and go to the directory in which this file exists
# 2) In the terminal, type: set FLASK_APP=server_flask.py
# 3) In the terminal, type: flask run

from flask import Flask, Response, request, jsonify
from flask_cors import CORS
from twitterSentimentAnalyzer import *

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST', 'GET'])
def hello_world():
    return jsonify({"data": "Hello World"})

@app.route('/analyze', methods=['POST', 'GET'])
def second():
    param = request.args.get('values')
    # param = int(param)
    # val = param + 20

    results = main(param)

    # return jsonify({"data": val})
    return jsonify({"data": results})





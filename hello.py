# Instructions to run file
# 1) Open terminal and go to the directory in which this file exists
# 2) In the terminal, type: set FLASK_APP=hello.py
# 3) In the terminal, type: flask run

from flask import Flask, Response, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.run(debug=True)

@app.route('/', methods=['POST', 'GET'])
def hello_world():
    # return 'Hello, World!'
    return jsonify({"data": "Hello World"})

@app.route('/second', methods=['POST', 'GET'])
def second():
    # return 'Hello, World!'
    param = request.args.get('values')
    # param = param + 20
    param = int(param)

    val = param + 20

    return jsonify({"data": val})

@app.route('/data', methods=['POST', 'GET'])
def get_data():
    print('Recieved from client: {}'.format(request.data))
    return Response('We recieved something…')

@app.route('/hellothere', methods=['GET'])
def hello():
    # jsonResp = {'jack': 4098, 'sape': 4139}
    response_data = "Works"
    print(response_data)
    return response_data





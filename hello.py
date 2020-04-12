# Instructions to run file
# 1) Open terminal and go to the directory in which this file exists
# 2) In the terminal, type: set FLASK_APP=hello.py
# 3) In the terminal, type: flask run

from flask import Flask, Response, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST', 'GET'])
def hello_world():
    return 'Hello, World!'

def get_data():
    print('Recieved from client: {}'.format(request.data))
    return Response('We recieved something…')





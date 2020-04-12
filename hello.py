# Instructions to run file
# 1) Open terminal and go to the directory in which this file exists
# 2) In the terminal, type: set FLASK_APP=hello.py
# 3) In the terminal, type: flask run

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'



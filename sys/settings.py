from flask import Flask
import os
import mysql.connector


config = {
    'user': 'admin',
    'password': '333',
    'host': 'localhost',
    'database': 'rsys',
    'raise_on_warnings': True
}

app = Flask(__name__)
SECRET_KEY = os.environ.get('SECRET_KEY', 'dab61ae03bd2b1acc4c7eb6b6947d0e58236539cfac29a1d0549356687ae7fc4')

def get_db_connection():
    connection = mysql.connector.connect(**config)
    return connection

#from flask import Flask, flash, redirect, render_template, request, session
#from flask_session import Session
#from tempfile import mkdtemp
#from werkzeug.exceptions import default_exceptions
#from werkzeug.security import check_password_hash, generate_password_hash
import json
import requests
import urllib2


#from helpers import apology, login_required
req = urllib2.request("https://www.quandl.com/api/v3/datatables/ZACKS/AR.json?api_key=sEpgZsqAFy4-iptWfY2V")
f = opener.open(req)
json = json.loads(f.read())
print(json)
print(json['unit'])

r = requests.get(url='https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
print(r.json())


#print(response.status_code)
#print(response)

#with open("response", "r") as read_file:
 #   data = json.load(response)
#data = json.loads(response)

#for (k, v) in data.items():
 #   print("Key: " + k)
  #  print("Value: " + str(v))
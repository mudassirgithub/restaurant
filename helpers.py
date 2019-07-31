import requests
import urllib.parse

from flask import redirect, render_template, request, session, flash
from functools import wraps


def login_required(f):
    """
    Decorate routes to require login.

    http://flask.pocoo.org/docs/1.0/patterns/viewdecorators/
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("user_id") is None:
            return render_template("index.html")
        return f(*args, **kwargs)
    return decorated_function

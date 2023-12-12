from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap = Bootstrap(app)

@app.route('cv_adk/')
def header():
    return render_template('header.html')

if __name__=='__main__':
    app.run(debug=True)
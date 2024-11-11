from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home/index.html')

@app.route('/referenties-info')
def referentieseninfo():
    return render_template('referenties-info/index.html')

@app.route('/AP-rental')
def aprental():
    return render_template('APrental/index.html')

@app.route('/AP-rental/licht')
def licht():
    return render_template('APrental/licht/index.html')

@app.route('/AP-rental/lichtsets')
def lichtsets():
    return render_template('APrental/lichtsets/index.html')

@app.route('/AP-rental/speakersets')
def speakersets():
    return render_template('APrental/speakersets/index.html')

@app.route('/AP-rental/SFX')
def SFX():
    return render_template('APrental/sfx/index.html')

@app.route('/AP-rental/algemene-voorwaarden')
def algemenevoorwaarden():
    return render_template('APrental/algemenevoorwaarden/index.html')

@app.errorhandler(404)
def page_not_found(error):
    # Render de 404-pagina wanneer een route niet bestaat
    return render_template('404/index.html'), 404


if __name__ == '__main__':
    app.run(debug=True)
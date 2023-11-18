from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Here, you can render an HTML file
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
@app.route('/')
def index():
    # Simulating game data
    game_data = {
        'player_name': 'John',
        'score': 100,
        'level': 5
    }
    # Pass the data to the HTML file
    return render_template('index.html', game_data=game_data)

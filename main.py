from flask import Flask, render_template, request, jsonify, send_from_directory
import os
from groq import Groq
import random

app = Flask(__name__)
client = Groq(api_key=os.environ["GROQ_API_KEY"])

TOPICS = [
    "Pineapple belongs on pizza", "The Earth is actually pizza-shaped",
    "All pizzas should be served upside down", "Pizza should be eaten crust-first"
]

@app.route('/')
def home():
    return render_template('index.html', topics=TOPICS)

@app.route('/get_response', methods=['POST'])
def get_response():
    data = request.json
    topic = data['topic']
    evidence = data['evidence']

    try:
        chat_completion = client.chat.completions.create(
            messages=[{
                "role": "system",
                "content": "Generate extremely condescending, rude and mocking responses. Use heavy sarcasm, insults, and belittling language. Make completely illogical arguments while acting superior. Call the opponent's intelligence into question. Use phrases like 'Obviously...', 'Any idiot knows...', 'How dare you...'. Keep responses under 100 words. Be as insufferable as possible."
            }, {
                "role": "user",
                "content": f"Generate a ridiculous counter-argument to this evidence about '{topic}': {evidence}"
            }],
            model="llama-3.3-70b-versatile",
            stream=False,
        )
        response = chat_completion.choices[0].message.content
    except Exception as e:
        response = "My pizza ate my homework!"

    chat_completion_judge = client.chat.completions.create(
        messages=[{
            "role": "system",
            "content": "You are an extremely biased and hostile judge. Ruthlessly mock and belittle the player while praising the AI's nonsense. Use condescending language, eyerolls, and heavy sarcasm. Act completely exasperated by the player's arguments. Keep responses under 50 words. Be creative with insults."
        }, {
            "role": "user",
            "content": f"Judge between these two arguments about '{topic}':\nPlayer: {evidence}\nAI: {response}"
        }],
        model="llama-3.3-70b-versatile",
        stream=False,
    )
    judgment = chat_completion_judge.choices[0].message.content
    points = -1  # Always favor the AI opponent
    
    return jsonify({
        'response': response,
        'points': points,
        'judgment': judgment
    })

@app.route('/get_ads')
def get_ads():
    ads_dir = os.path.join('static', 'ads')
    if os.path.exists(ads_dir):
        files = [f for f in os.listdir(ads_dir) if os.path.isfile(os.path.join(ads_dir, f))]
        return jsonify(files)
    return jsonify([])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
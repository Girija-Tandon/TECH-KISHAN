import streamlit as st
from chatbot import generate_response
import sys
import os

# Add the chatbot directory to sys.path
sys.path.append(os.path.join(os.path.dirname(__file__), 'chatbot'))

# Set Streamlit page configuration
st.set_page_config(page_title="Tech Kisan Chatbot", page_icon="🌱", layout="wide")

# Define your new background image URL here
background_image_url = 'https://th.bing.com/th/id/OIP.rqrYQYb4xl0OeUICDmyNwAHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7'  # Direct image URL

# Custom CSS to enhance the UI
st.markdown(f"""
    <style>
    /* Global background image for the entire page */
    body {{
        background-image: url('{background_image_url}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }}

    /* Chat container styles */
    .chat-container {{
        display: flex;
        flex-direction: column;
        gap: 1em;
        background-color: rgba(255, 255, 255, 0.8); /* semi-transparent background */
        padding: 2em;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-height: 400px;
        overflow-y: auto;
        width: 100%;
        max-width: 900px;
        margin: auto;
        height: 80%;
    }}

    /* User message style */
    .user-message {{
        background-color: #3f72af;
        color: white;
        border-radius: 15px;
        padding: 10px 20px;
        max-width: 80%;
        align-self: flex-end;
    }}

    /* Bot message style */
    .bot-message {{
        background-color: #61a5c2;
        color: white;
        border-radius: 15px;
        padding: 10px 20px;
        max-width: 80%;
        align-self: flex-start;
    }}

    /* Header style */
    .header {{
        font-size: 1.8rem;
        font-weight: bold;
        color: #3f72af;
        text-align: center;
        margin-bottom: 20px;
    }}

    /* Custom input styles */
    .stTextInput>div>div>input {{
        font-size: 1rem;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid #ddd;
        width: 80%;
        margin: 10px auto;
        display: block;
    }}
    </style>
""", unsafe_allow_html=True)

# Chatbot interface
st.title("Tech Kisan AI Chatbot 🌱")
st.write("Ask me anything about farming, agriculture, and Tech Kisan!")

# Initialize chat history if not already initialized
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display previous messages in the chat
with st.container():
    for message in st.session_state.messages:
        if message["role"] == "user":
            st.markdown(f'<div class="user-message">{message["content"]}</div>', unsafe_allow_html=True)
        else:
            st.markdown(f'<div class="bot-message">{message["content"]}</div>', unsafe_allow_html=True)

# User input field
user_input = st.text_input("You: ", key="user_input")

# Handle user input and generate response
if user_input:
    # Add user's message to the session state
    st.session_state.messages.append({"role": "user", "content": user_input})
    
    # Generate bot response using the Gemini API
    bot_response = generate_response(user_input)
    
    # Add bot's response to the session state
    st.session_state.messages.append({"role": "bot", "content": bot_response})

    # Clear input field using the input widget's default value (this clears the widget)
    st.rerun()

# Footer
st.markdown("""
    <footer style="text-align: center; padding: 20px; font-size: 0.9em; color: #aaa;">
        <p>Powered by Tech Kisan AI Chatbot 🌱</p>
    </footer>
""", unsafe_allow_html=True)

import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load API key from environment variable
load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))  # Replace with your Gemini API key

def generate_response(user_input):
    """Generate a response from Gemini 1.5 Flash."""
    try:
        # Load the Gemini model
        model = genai.GenerativeModel("gemini-1.5-flash")
        
        # Generate response from the model
        response = model.generate_content(user_input)
        
        # Return the generated response text
        return response.text.strip()

    except Exception as e:
        return f"Error: {str(e)}"

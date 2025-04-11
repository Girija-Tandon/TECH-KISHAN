# Create __init__.py in the chatbot directory if it doesn't exist
import os

directory = 'chatbot'
init_file = os.path.join(directory, '__init__.py')

if not os.path.exists(init_file):
    with open(init_file, 'w') as f:
        pass  # Just create an empty __init__.py file
    print(f'Created {init_file}')
else:
    print(f'{init_file} already exists')

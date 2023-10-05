import openai

API_KEY = open("API_KEY", "r").read()
openai.api_key = API_KEY

# response = openai.ChatCompletion.create(
#     model = "gpt-3.5-turbo",
#     messages = [
#         { "role": "user", "content": "What is your name?"}
#     ]
# )
# print(response)

chat_log = []


while True:
    user_message = input()
    if user_message.lower() == "quit":
        break
    else:
        chat_log.append({"role": "user", "content": user_message})

        response = openai.ChatCompletion.create(
            model = "gpt-3.5-turbo",
            messages = chat_log
        )

        # look at the output; this outputs only the message content
        assistant_response = response['choices'][0]['message']['content']
        # strip new line and white spaces
        print("ChatGPT: ", assistant_response.strip("\n").strip())

        # add the AIs response to chat log
        chat_log.append({"role": "assistant", "content": assistant_response.strip("\n").strip()})


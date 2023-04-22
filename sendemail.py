import requests
import json

url = "https://api.postmarkapp.com/email"
headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-Postmark-Server-Token": "03a93108-9800-4a5e-9dc7-5055b1d9a4c1"
}
payload = {
    "From": "raian.barbosa@docente.senai.br",
    "To": "raian.barbosa@docente.senai.br",
    "Subject": "Hello from Postmark",
    "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
    "MessageStream": "outbound"
}

response = requests.post(url, headers=headers, data=json.dumps(payload))

print(response.status_code)
print(response.json())

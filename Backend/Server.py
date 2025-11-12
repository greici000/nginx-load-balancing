from flask import Flask
import socket
import os

# Inicializa a aplicação Flask
app = Flask(__name__)

# Define a porta
PORT = int(os.environ.get('PORT', 8080))

@app.route('/')
def hello():
    # Obtém o hostname do container (ex: 'backend1' ou 'backend2')
    hostname = socket.gethostname()
    
    # Retorna a resposta HTTP
    return f"Hello from Backend Server on {hostname} (Port {PORT})!\n"

if __name__ == '__main__':
    # Roda o servidor na porta 8080 (acessível apenas pelo Nginx)
    app.run(host='0.0.0.0', port=PORT)

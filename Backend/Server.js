#!/bin/bash


PROJECT_DIR="nginx-load-balancing"

echo "Criando o arquivo ${PROJECT_DIR}/backend/server.js..."


mkdir -p $PROJECT_DIR/backend


cat > $PROJECT_DIR/backend/server.js << EOL
const http = require('http');
const port = process.env.PORT || 8080;
const os = require('os');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(\`Hello from Backend Server on \${os.hostname()} (Port \${port})!\n\`);
});
server.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}/\`);
});
EOL

echo "Arquivo $PROJECT_DIR/backend/server.js criado com sucesso."

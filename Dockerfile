# 1. Node.js LTS als Basis verwenden
FROM node:18

# 2. Arbeitsverzeichnis setzen
WORKDIR /usr/src/app

# 3. package.json und package-lock.json kopieren
COPY package*.json ./

# 4. Abhängigkeiten installieren
RUN npm install

# 5. gesamten Code kopieren
COPY . .

# 6. Port freigeben, den dein Middleware-Server nutzt
EXPOSE 3000

# 7. Server starten
CMD ["node", "server.js"]

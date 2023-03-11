
FROM node:19.7-alpine3.16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --production
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "80"]

EXPOSE 80

FROM node:alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY ./index.js ./index.js
COPY ./routes ./routes
COPY ./models ./models
COPY ./database ./database
COPY ./controllers ./controllers

RUN npm install --silent
EXPOSE 4000
CMD ["npm","start"]
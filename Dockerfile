FROM node

ENV NODE_ENV=production

WORKDIR /rest_api

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
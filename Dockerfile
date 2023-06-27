FROM node

WORKDIR /rest_api

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "server"]
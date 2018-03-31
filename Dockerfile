FROM node:9

ADD . /app
WORKDIR /app
RUN npm install

CMD npm start
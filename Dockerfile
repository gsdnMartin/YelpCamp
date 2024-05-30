FROM node:18-alpine

RUN mkdir -p /home/cads/projects/docker/YelpCamp/node_modules && chown -R node:node /home/cads/projects/docker/YelpCamp

WORKDIR /node

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

ENV MONGODB_URI=mongodb://db:27017/yelpcamp 

EXPOSE 3000

USER node

CMD [ "node", "app.js" ]

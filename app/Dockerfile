FROM node:10.15
WORKDIR /app
COPY package-lock.json package.json ./
EXPOSE 3000

RUN npm i --no-progress --ignore-optional

CMD npm run webpack:w

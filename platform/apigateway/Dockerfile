FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

ENV PORT=3000
ENV AUTHSERVICEURL=http://auth:5000
ENV NODE_ENV=development

EXPOSE 3000

CMD ["npm", "start"]


FROM node:20.11.1-slim
WORKDIR /app
COPY . .
EXPOSE 4321
RUN npm i
CMD ["npm", "run", "dev"]
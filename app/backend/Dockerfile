FROM node:16.14-alpine
WORKDIR /backend
COPY . .
RUN npm install
EXPOSE 3001
ENTRYPOINT [ "npm", "run", "build" ]
CMD ["start"]
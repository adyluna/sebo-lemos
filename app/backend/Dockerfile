FROM node:16.14-alpine
WORKDIR /backend
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3001
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]
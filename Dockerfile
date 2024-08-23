FROM node:18.13-alpine
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 4200
# CMD [ "yarn", "start"]
# OR 
RUN ["chmod", "./entrypoint.sh"]
ENTRYPOINT [ "sh","./entrypoint.sh" ]

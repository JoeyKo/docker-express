FROM node:10.13.0

WORKDIR /app
# https://stackoverflow.com/a/32785014/232619
COPY . /app
RUN npm install
COPY ./docker/wait-for-it.sh /usr/local
RUN chmod +x /usr/local/wait-for-it.sh

EXPOSE 4000

CMD ["npm", "start"]
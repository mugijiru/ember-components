FROM node:lts

# install Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list
RUN apt-get update && apt-get install -y google-chrome-stable

# install ember-cli-update
RUN yarn global add ember-cli-update

# install ember-cli
RUN npm install -g ember-cli

WORKDIR /app

COPY . /app

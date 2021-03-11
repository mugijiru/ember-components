FROM node:lts

# install Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list
RUN apt-get update && apt-get install -y google-chrome-stable

# install ember-cli
RUN yarn global add ember-cli@2.18.2

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY . /app

CMD ['ember', 'serve', '-h', '0.0.0.0']
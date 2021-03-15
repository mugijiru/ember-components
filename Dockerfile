FROM ruby:2.6

# install Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list
RUN apt-get update && apt-get install -y google-chrome-stable

# install nodejs
RUN curl https://deb.nodesource.com/setup_14.x | bash
RUN apt-get update -qq && apt-get install -y nodejs

# install ember-cli
RUN npm install -g ember-cli@2.18.2

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY ember-components.gemspec /app/ember-components.gemspec
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

COPY . /app
RUN bundle install

CMD ['ember', 'serve', '-h', '0.0.0.0']

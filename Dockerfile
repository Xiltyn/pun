# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8.4.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s dist
EXPOSE 5000

RUN npm install -g yarn

# Install all dependencies of the current project.
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn

# Copy all local files into the image.

COPY . .

# Build for production.
RUN npm run build
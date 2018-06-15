# What image do you want to start building on?
FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/overviewApp

# Tell your container where your app's source code will live
WORKDIR /src/overviewApp

# What source code do you what to copy, and where to put it?
COPY . /src/overviewApp

# Does your app have any dependencies that should be installed?
RUN npm install
RUN npm run seed

# What port will the container talk to the outside world with once created?
EXPOSE 3002

# How do you start your app?
CMD ["npm", "start"]
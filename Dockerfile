FROM node:alpine

Set the working directory to /app
WORKDIR /app

Copy the current directory contents into the container at /app
COPY . /app

Make port 80 available to the world outside this container
EXPOSE 80

Run the command to start the development server when the container launches
CMD ["http-server", "-p", "80"]


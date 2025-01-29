

FROM node:alcalpine


COPY . /app

EXPOSE 80

CMD ["http-server", "-p", "80"]

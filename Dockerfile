FROM node:12.7.0

LABEL version="1.0"
LABEL description="Web app Articulos NodeJS"
LABEL maintainer="Edwin Montoya - emontoya@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install --test

EXPOSE 80
CMD npm start

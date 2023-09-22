FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./Engine/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/

EXPOSE 80

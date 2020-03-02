### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY /dist /usr/share/nginx/html
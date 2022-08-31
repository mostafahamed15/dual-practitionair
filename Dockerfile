# Stage 1, build the react app
FROM node:14-alpine as react-build
RUN mkdir /app
WORKDIR /app
# tsconfig is for typescript lang configuration, needed to describe how packages should run.
COPY ["package.json", "/app/"]

# copy the project files to app
COPY ./ /app/


# cd into app , install packages
RUN cd /app && npm install
# build the project
RUN npm -s run build-all

# Stage 2, based on Nginx
FROM hub.leandevclan.com/devops/nginx-envdir
# which production mode to be served
COPY --from=react-build /app/dist /usr/share/nginx/html
EXPOSE 80


# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14.16.0 as build


# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
#COPY ./ /usr/local/app/

COPY package*.json /usr/local/app/

# Install all the dependencies
RUN npm install

CMD ["npm", "start"]

# Generate the build of the application
#RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
#FROM nginx:latest

# Copy the build output to replace the default nginx contents.
#COPY --from=build /usr/local/app/dist/TRexWebApp /usr/share/nginx/html
#COPY ./ssl /etc/ssl/
#COPY nginx.conf /etc/nginx/nginx.conf



# Expose port 80
#EXPOSE 4200
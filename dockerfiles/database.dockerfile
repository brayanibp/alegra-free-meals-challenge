# Use the official PostgreSQL 16 image as the base
FROM postgres:16

# Set environment variables for the PostgreSQL database
# These can also be set dynamically in your Docker Compose file or Kubernetes manifest
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# Optionally, you can add a SQL file to initialize the database with some data
# This file will be executed after the database is created
COPY ./init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432

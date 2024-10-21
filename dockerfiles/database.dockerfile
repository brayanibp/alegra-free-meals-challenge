# Use the official PostgreSQL 16 image as the base
FROM postgres:16

# Set environment variables for the PostgreSQL database
# These will be default values, real values should be set dynamically from Docker Compose file or Kubernetes manifest
ENV POSTGRES_USER=free_meals
ENV POSTGRES_PASSWORD=secret
ENV POSTGRES_DB=free_meals

# Adds a SQL file to initialize the database with some data
# This file will be executed after the database is created
COPY ./dockerfiles/init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432

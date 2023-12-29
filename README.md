# book-api using bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.18. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Local Docker Compose Setup

This project uses Docker Compose to manage local development environments. The `local-docker-compose.yml` file defines the services, networks, and volumes.

## Services

### MongoDB

A MongoDB service is defined with the image `mongo`. The root username and password are set through environment variables. The service exposes port 27017 for connections.

```yaml
mongo:
  image: mongo
  environment:
    MONGO_INITDB_ROOT_USERNAME: ${DB_ADMINUSER}
    MONGO_INITDB_ROOT_PASSWORD: ${DB_ADMINPASS}
  ports:
    - '27017:27017'
```

````

The MongoDB data is persisted using a Docker volume. The volume maps a local directory to the `/data/db` directory in the container.

```yaml
volumes:
  - /home/fernando/workspace/Docker/Volumes/MongoDB:/data/db
```

## Networks

A network named `mongo-compose-network` is defined with the bridge driver. This network is used by the services to communicate with each other.

```yaml
networks:
  mongo-compose-network:
    driver: bridge
```

## Running the Services

To start the services, navigate to the directory containing the `local-docker-compose.yml` file and run the following command:

```bash
docker-compose -f local-docker-compose.yml up
```

To stop the services, press `Ctrl+C` in the terminal where the services are running, or run the following command in another terminal:

```bash
docker-compose -f local-docker-compose.yml down
```
````

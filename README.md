# A dead simple HTTP vhost proxy routing / port sharing implementation for node.js

This project implements a dead simple HTTP multi domain name / IP /
directory vhost port forwarding router proxy using the http-proxy module.
It shows the power of node.js by being implemented in less than 50 lines of code.

## Installing

```

    [sudo] npm install port-vhoster

```

## Configuring

A valid configuration file for port-vhoster is written in JSON notation and
contains 3 sections:

- description = Description to log to the TTY
- port        = Source port to listen to. This is the port you want to enable port sharing for (e.g. 80)
- vhosts      = An object containing key ($ip OR $domain/port) and a value (target $ip:$port/$path)

## Configuration example

The following configuration is a simple routing example. You can add more vhosts to the object
and register more complex routings (domain name, ip, path) too:

```

    {
        "description": "For example routing all HTTP requests of port 8100 to localhost:8080...",
        "port": 8100,
        "vhosts": {
            "localhost": "127.0.0.1:8080"
        }
    }

```

By default you should save the config as plain text file called ```port-vhoster.json```.

## Running the port sharing proxy

Dead simple, just call node to run ```port-vhoster.js``` optionally name an alternative config file path:

```

    [sudo] node port-vhoster.js [alternative-config-file.json]

```

You will need super user permissions if you try the listen to (share) ports below 1024 (e.g. port 80).
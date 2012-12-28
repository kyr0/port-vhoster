port-vhoster
==========

# A simple HTTP vhost reverse proxy / port sharing implementation for node.js. Run multiple node HTTP servers (Domains, IP's) through one port.

This project implements a simple HTTP multi domain name / IP / directory HTTP reverse proxy for virtual hosting / port sharing.
It simply does what a reverse proxy does combined with some mod_rewrite feature support.

This project also shows the power of node.js by being implemented in less than 100 lines of code.

## Prerequisites

Make sure:
- node.js is installed (>= 0.8.*)
- npm is installed

## Installing

```

    [sudo] npm install -g port-vhoster

```

## Configuring

A valid configuration file for port-vhoster is written in JSON notation as a single object that should provide
three key/value pairs:

- description (String) = Description, printed to the terminal on startup.
- port        (Number) = Source port (share port) to listen to (e.g. 80).
- vhosts      (Object) = Key ($ip OR $domain/port) / value (target $ip:$port/$path)-pairs of vhost-configurations.

## Configuration example

The following configuration is a simple routing example. You can add more vhosts to the config object too:

```

    {
        "description": "Routing with port sharing on port 80 (HTTP) for some domains and paths...",
        "port": 80,
        "vhosts": {
            "www.aron-homberg.de": "127.0.0.1:8081",
            "aron-homberg.de": "127.0.0.1:8081",
            "example.com/downloads": "10.0.0.1:8080",
            "example.com/uploads": "10.0.0.2:8080/master/golive/upload"
        }
    }

```

Take a look at the [examples](https://github.com/kyr0/port-vhoster/tree/master/examples) directory for more inspiration.

## Running

By default, ```port-vhoster``` searches for a config file called ```port-vhoster.json``` in current working directory.
If you want to use a different name, run ```port-vhoster``` with the optional argument to name the config file:

```

    [sudo] port-vhoster [$alternative-config-file.json]

```

You may need super-user permissions if you want ```port-vhoster``` to listen to a port below 1024 (e.g. port 80).

## Logging and running in stand-alone mode

If you're on a Unix/Linux/Mac OS X system you can run port-vhoster in server mode easily:

Starting (e.g. ```start-vhoster.sh``` - don't forget to: ```chmod +x start-vhoster.sh```!):

```
    #!/bin/sh
    echo "Starting port-vhoster..."
    nohup port-vhoster > port-vhoster.out 2> port-vhoster.err < /dev/null &

```

Stopping (e.g. ```stop-vhoster.sh``` - don't forget to: ```chmod +x stop-vhoster.sh```!):

```
    #!/bin/sh
    echo "Stopping port-vhoster..."
    kill $(ps aux | grep '[p]ort-vhoster' | awk '{print $2}')

```

For sure, server mode and logging may also be possible on Microsoft Windows platform but that's currently untested.
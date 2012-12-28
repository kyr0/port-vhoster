port-vhoster
============

A simple, rule based HTTP vhost port forwarder to let multiple node instances share one port (e.g. port 80). Proxies HTTP client connections internally to node instances running on endpoint ports (e.g. 8080) by source port and target (IP OR domain name) identification (vhosting).
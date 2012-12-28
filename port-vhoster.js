var httpProxy = require('http-proxy'), argv = require('optimist').argv,
    configFileName = 'port-vhoster.json', routingConfig = {}, proxyServer;

// Use different config file if named
if (argv._[0]) {
    configFileName = argv._[0];
}

// Read routing config
routingConfig = JSON.parse(require('fs').readFileSync(
    require('path').resolve(__dirname, configFileName), 'utf8')
);

// Validate routing config
if (!routingConfig.port) {
    throw new Error('No source listening port given!');
}

if (!routingConfig.vhosts) {
    throw new Error('No vhost config given!');
}

try {

    // Logging
    if (routingConfig.description) {
        console.log(routingConfig.description);
    }

    // Create proxy server
    proxyServer = httpProxy.createServer({
        router: routingConfig.vhosts
    });

    // Listen on source port
    proxyServer.listen(routingConfig.port);

} catch (e) {
    throw e;
}
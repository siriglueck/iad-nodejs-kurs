console.log('Logger-Module');

function log(msg) {
    console.log(`[${new Date().toLocaleTimeString()}] ${msg}`)
}

module.exports = log;

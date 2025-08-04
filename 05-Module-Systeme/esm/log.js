console.log('Logger-Module');

function log(msg) {
    console.log(`[${new Date().toLocaleTimeString()}] ${msg}`)
}

export default log;

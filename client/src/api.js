function subscribeToTimer(interval, cb) {
}
export { subscribeToTimer }

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
var socket = io.connect('http://192.168.1.142:3000');
	socket.on('heartbeat', function (data) {
		
		socket.emit('heartbeat', { time: now });
	});
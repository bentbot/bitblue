var socket = io.connect('http://192.168.1.142:3000');
	socket.on('heartbeat', function (data) {
		jQuery('.navbar-brand').addClass('glow');
		setTimeout(function () { jQuery('.navbar-brand').removeClass('glow'); },1300);
		socket.emit('heartbeat', { time: Date(milliseconds) });
	});

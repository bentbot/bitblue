var swig  	= require('swig'),
	express	= require('express'),
	io	 	= require('socket.io')(3000);
	app		= express();

// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use('/video', express.static(__dirname + '/views/resources/video'));
app.use('/style', express.static(__dirname + '/views/resources/scss'));
app.use('/fonts', express.static(__dirname + '/views/resources/fonts'));
app.use('/js', express.static(__dirname + '/views/resources/js'));

	app.get('/', function (req, res) {
	  	res.render('index', {
			pagename: 'Bit Blue'
		});
	});

io.on('connection', function (socket) {

	socket.on('console', function (data) {
		console.log(data);
	});
	socket.on('disconnect', function (data) {

	});
});

app.listen(8080);
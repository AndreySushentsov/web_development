// Задаем переменные, подключаем необходимые модули
var
	express  	= require('express'),
	morgan   	= require('morgan'),
	bodyParser = require('body-parser'),
	hostname 	= 'localhost',
	port     	= 3000,
	app      	= express();

// Выводит сосотяние запроса в командную строку
app.use(morgan('dev'));


// Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(__dirname + '/public'));

//Запускаем сервер
app.listen(port, hostname, function () {
	console.log('Сервер слушает на http://' + hostname + ': ' + port);
})
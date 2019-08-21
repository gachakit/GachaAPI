const	config 			= require('./config/config.js')

const	app				= require('express')()
const	port 			= process.env.PORT || 3000

const	morgan 			= require('morgan')
const	bodyParser 		= require('body-parser')
const	cookieParser	= require('cookie-parser')
const   jwt             = require('jsonwebtoken')

//Add logic to check if config file exsists (if not then exit and prompt user)
//Add logic to check if database files have been intintazlied; such as teams data and seasons data

// const	MongoClient 	= require('mongodb').MongoClient
// const	configDB 		= config.mongodb
// const	assert 			= require('assert')
// const 	ObjectId 		= require('mongodb').ObjectID

app.use(morgan('dev')) 	//log every request to the console

app.use(cookieParser())	//make cookies parsed!

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

function someMiddleWare(req, res, next){
	console.log('------------------------------------------------------------------')
	console.log(new Date())
	console.log('device: ', req.headers['user-agent'])
	console.log('Cookies: ', req.cookies)
	next()
}

app.use(someMiddleWare)

require('./api/api')(config, app)

app.listen(port)
console.log('Server started on port ' + port)
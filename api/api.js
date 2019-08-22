//api by Michael Leonffu

// module.exports = function(config, app, db, ObjectId){

module.exports = function(config, app, db){

app.get('/api', (req, res) => {
	res.send('api home')
})

app.get('/api/version', (req, res) => {
	res.status(200).send(config.api.version)
})


//Connecting all APIs
require('./account/account')(config, app, db)
require('./engine/engine')(config, app, db)

}
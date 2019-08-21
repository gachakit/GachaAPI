//api by Michael Leonffu

// module.exports = function(config, app, db, ObjectId){

module.exports = function(config, app){

app.get('/api', (req, res) => {
	res.send('api home')
})

app.get('/api/version', (req, res) => {
	res.status(200).send(config.api.version)
})

app.get('/api/gacha', (req, res) => {
	res.status(200).send("you got: " + config.gacha.units[Math.floor(Math.random()*config.gacha.units.length)] + "!!!")
})

//Connecting all APIs

// require('./apiName/apiHead')(config, app, db)

}
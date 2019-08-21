//api by Michael Leonffu

// module.exports = function(config, app, db, ObjectId){

module.exports = function(config, app, db){

app.get('/api', (req, res) => {
	res.send('api home')
})

app.get('/api/version', (req, res) => {
	res.status(200).send(config.api.version)
})

app.get('/api/gacha', (req, res) => {
	db.collection("units").aggregate([
		{$sample:{size:1}}
		], (err, result) =>{
			if(err){
				return res.status(400).json({message: "cannot find units!"})
			}else{
				result.toArray((err, data) =>{
					if(err){
						return res.status(400).json({message: "cannot find units!!"})
					}else{
						// res.status(200).send("you got: " + config.gacha.units[Math.floor(Math.random()*config.gacha.units.length)] + "!!!")
						res.status(200).send("you got: " + data[0].name + "!!!")
					}
				})
			}
	})
})

//Connecting all APIs

// require('./apiName/apiHead')(config, app, db)

}
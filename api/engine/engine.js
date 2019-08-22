//engine by Michael Leonffu

module.exports = function(config, app, db){

app.get('/api/engine', (req, res) => {
	res.send('engine home')
})

app.get('/api/engine/gacha', (req, res) => {
	db.collection('units').aggregate([
		{$sample:{size:1}}
		], (err, result) =>{
			if(err)
				return res.status(400).json({message: 'cannot find units!'})
			else
				result.toArray((err, data) =>{
					if(err){
						return res.status(400).json({message: 'cannot find units!!'})
					}else{
						console.log(req.cookies)
						db.collection('inventory').updateOne(
							{
								_id: req.cookies['gachakit-auth']
							},
							{
								$push:{
									inventory: data[0].name
								}
							}, 
							{
								upsert: true
							},(err, result) =>{
								if(err)
									return res.status(400).json({message: 'cannot save unit!'})
								else
									res.status(200).send("you got: " + data[0].name + "!!!")
						})
					}
				})
			
	})
})

app.get('/api/engine/mine', (req, res) => {
	db.collection("inventory").findOne(
		{
			_id: req.cookies['gachakit-auth']
		}, (err, result) =>{
			console.log(result)
			if(err)
				return res.status(400).json({message: "cannot find mine!"})
			else
				res.status(200).json({yours: result.inventory})
			
	})
})
}
//account by Michael Leonffu

module.exports = function(config, app, db){

app.get('/api/account', (req, res) => {
	res.send('account home')
})

app.get('/api/account/sign-in', (req, res) => {
	
	// req = {
	// 	query:{
	// 		name: "abc"
	// 	}
	// }

	res.cookie('gachakit-auth', req.query.name, { maxAge: 86400000, httpOnly: true})	//cookie lasts for 24 hours; place this in config
	res.status(201).json({name: req.query.name})
})

app.get('/api/account/sign-out', (req, res) =>{


	res.clearCookie('gachakit-auth')

	res.status(200).json({message: 'removed cookies'})

})


}
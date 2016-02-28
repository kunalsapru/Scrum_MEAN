module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

    //All 'Role' related requests
    require('./serverRequests/roleRequests')(app);
    
    //All 'Project' related requests
    require('./serverRequests/projectRequests')(app);
    
    //All 'Priority' related requests
    require('./serverRequests/priorityRequests')(app);

    //All 'Status' related requests
    require('./serverRequests/statusRequests')(app);

    //All 'User' related requests
    require('./serverRequests/userRequests')(app);

    //All 'User Story Type' related requests
    require('./serverRequests/userStoryTypeRequests')(app);

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
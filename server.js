const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

// Routes
const emailRoute = require("./routes/email");

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "./react-ui/build")));

// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
	response.sendFile(
		path.resolve(__dirname, "./react-ui/build", "index.html")
	);
});

app.listen(PORT, function() {
	console.error(`Listening on port ${PORT}`);
});

app.use("/email/", emailRoute);

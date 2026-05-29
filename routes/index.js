var express = require('express');
var router = express.Router();
const request = require('request');
const apiKey = process.env.API_KEY;
const apiBaseUrl = 'http://www.omdbapi.com';

const nowPlayingUrl = `${apiBaseUrl}/?apikey=${apiKey}&s=batman&type=movie`;
const imageBaseUrl = '';
router.use((req, res, next) => {
	res.locals.imageBaseUrl = imageBaseUrl;
	next();
});
/* GET home page. */
router.get('/', function (req, res, next) {
	request(nowPlayingUrl, (error, response, movieData) => {
		if (error) {
			console.error('Network Error:', error);
			return res.render('index', { parsedData: [] });
		}
		const parsedData = JSON.parse(movieData);
		console.log('OMDB API Response:', parsedData); // Check your terminal to see what OMDB returned!
		res.render('index', { parsedData: parsedData.Search || [] });
	});
});

/* GET single movie page. */
router.get('/movie/:id', function (req, res, next) {
	const movieId = req.params.id;
	const movieUrl = `${apiBaseUrl}/?apikey=${apiKey}&i=${movieId}`;

	request(movieUrl, (error, response, movieData) => {
		if (error) {
			console.error('Network Error:', error);
			return res.render('single-movie', { parsedData: null });
		}
		const parsedData = JSON.parse(movieData);
		res.render('single-movie', { parsedData: parsedData });
	});
});

module.exports = router;

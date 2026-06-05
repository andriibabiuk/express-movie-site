var express = require('express');
var router = express.Router();
const passport = require('passport');
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
		console.log('OMDB API Response:', parsedData);
		res.render('index', { parsedData: parsedData.Search || [] });
	});
});
router.get('/login', passport.authenticate('github'));

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

/* POST search functionality. */
router.post('/search', function (req, res, next) {
	const searchTerm = req.body.movieSearch;
	if (!searchTerm) {
		return res.redirect('/');
	}
	const category = req.body.cat || 'movie';
	const searchUrl = `${apiBaseUrl}/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}&type=${category}`;

	request(searchUrl, (error, response, movieData) => {
		if (error) {
			console.error('Network Error:', error);
			return res.render('index', { parsedData: [] });
		}
		const parsedData = JSON.parse(movieData);
		res.render('index', { parsedData: parsedData.Search || [] });
	});
});

module.exports = router;

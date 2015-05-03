var imdb = imdb || {};

(function (scope) {

	var genresCreated = 0;

	function Genre(name) {
		this.name = name;
		this._movies = [];
		genresCreated += 1;
		this._id = genresCreated;
	}

	Object.defineProperty(Genre.prototype, 'name', {
		get: function () {
			return this._name;
		},
		set: function (value) {
			this._name = value;
		}
	});

	Genre.prototype.addMovie = function (movie) {
		this._movies.push(movie);
	};

	Genre.prototype.deleteMovie = function (movie) {
		var index = this._movies.indexOf(movie);
		if (index > -1) {
			this._movies.splice(index, 1);
		}
	};

	Genre.prototype.deleteMovieById = function (id) {
		var movie = this._movies.filter(function (element) {
			if (element._id === id) {
				return element;
			}
		})[0];

		this.deleteMovie(movie);
	};

	Genre.prototype.getMovies = function () {
		return this._movies;
	};

	scope.getGenre = function (name) {
		return new Genre(name);
	};
}(imdb));
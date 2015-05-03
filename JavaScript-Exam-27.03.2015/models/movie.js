var imdb = imdb || {};

(function (scope) {

	var moviesCreated = 0;

	function Movie(title, length, rating, country) {
		this.title = title;
		this.length = length;
		this.rating = rating;
		this.country = country;
		this._actors = [];
		this._reviews = [];
		moviesCreated += 1;
		this._id = moviesCreated;
	}

	Object.defineProperty(Movie.prototype, 'title', {
		get: function () {
			return this._title;
		},
		set: function (value) {
			this._title = value;
		}
	});

	Object.defineProperty(Movie.prototype, 'length', {
		get: function () {
			return this._length;
		},
		set: function (value) {
			this._length = value;
		}
	});

	Object.defineProperty(Movie.prototype, 'rating', {
		get: function () {
			return this._rating;
		},
		set: function (value) {
			this._rating = value;
		}
	});

	Object.defineProperty(Movie.prototype, 'country', {
		get: function () {
			return this._country;
		},
		set: function (value) {
			this._country = value;
		}
	});

	Movie.prototype.addActor = function (actor) {
		this._actors.push(actor);
	};

	Movie.prototype.getActors = function () {
		return this._actors;
	};

	Movie.prototype.addReview = function (review) {
		this._reviews.push(review);
	};

	Movie.prototype.deleteReview = function (review) {
		var index = this._reviews.indexOf(review);
		if (index > -1) {
			this._reviews.splice(index, 1);
		}
	};

	Movie.prototype.deleteReviewbyId = function (id) {
		var review = this._reviews.filter(function (element) {
			if (element._id === id) {
				return element;
			}
		})[0];

		this.deleteReview(review);
	};

	Movie.prototype.getReviews = function () {
		return this._reviews;
	};

	scope._Movie = Movie;

	scope.getMovie = function (title, length, rating, country) {
		return new Movie(title, length, rating, country);
	};
}(imdb));
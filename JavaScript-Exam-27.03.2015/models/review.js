var imdb = imdb || {};

(function (scope) {

	var reviewsCreated = 0;

	function Review(author, content, date) {
		this.author = author;
		this.content = content;
		this.date = date;
		reviewsCreated += 1;
		this._id = reviewsCreated;
	}

	Object.defineProperty(Review.prototype, 'author', {
		get: function () {
			return this._author;
		},
		set: function (value) {
			this._author = value;
		}
	});

	Object.defineProperty(Review.prototype, 'content', {
		get: function () {
			return this._content;
		},
		set: function (value) {
			this._content = value;
		}
	});

	Object.defineProperty(Review.prototype, 'date', {
		get: function () {
			return this._date;
		},
		set: function (value) {
			this._date = value;
		}
	});

	scope.getReview = function (author, content, date) {
		return new Review(author, content, date);
	};
}(imdb));
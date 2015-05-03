var imdb = imdb || {};

(function (scope) {

	function Theatre(name, length, rating, country, isPuppet) {
		scope._Movie.call(this, name, length, rating, country);
		this.isPuppet = isPuppet;
	}

	Theatre.extends(scope._Movie);

	Object.defineProperty(Theatre.prototype, 'isPuppet', {
		get: function () {
			return this._isPuppet;
		},
		set: function (value) {
			this._isPuppet = value;
		}
	});

	scope.getTheatre = function(name, length, rating, country, isPuppet) {
		return new Theatre(name, length, rating, country, isPuppet);
	};
}(imdb));
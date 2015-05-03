var imdb = imdb || {};

(function (scope) {

	var actorsCreated = 0;

	function Actor(name, bio, born) {
		this.name = name;
		this.bio = bio;
		this.born = born;
		actorsCreated += 1;
		this._id = actorsCreated;
	}

	Object.defineProperty(Actor.prototype, 'name', {
		get: function () {
			return this._name;
		},
		set: function (value) {
			this._name = value;
		}
	});

	Object.defineProperty(Actor.prototype, 'bio', {
		get: function () {
			return this._bio;
		},
		set: function (value) {
			this._bio = value;
		}
	});

	Object.defineProperty(Actor.prototype, 'born', {
		get: function () {
			return this._born;
		},
		set: function (value) {
			this._born = value;
		}
	});

	scope.getActor = function (name, bio, born) {
		return new Actor(name, bio, born);
	};
}(imdb));
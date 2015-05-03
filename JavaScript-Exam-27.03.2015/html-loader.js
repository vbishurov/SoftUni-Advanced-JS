var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data);

		container.appendChild(genresUl);

		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				detailsContainer.innerHTML = '';
				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				moviesContainer.setAttribute('data-genre-id', genreId);
			}
		});

		// Task 2 - Add event listener for movies boxes
		moviesContainer.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI' || ev.target.parentElement.tagName === 'LI') {
				var genreId = parseInt(moviesContainer.getAttribute('data-genre-id')) - 1,
					movieId,
					movie;

				if (ev.target.tagName === 'LI') {
					movieId = parseInt(ev.target.getAttribute('data-id'));
				} else {
					movieId = parseInt(ev.target.parentElement.getAttribute('data-id'));
				}

				movie = data[genreId].getMovies().filter(function (movie) {
					return movie._id === movieId;
				})[0];

				var moviesDetails = loadMovieDetails(movie);
				detailsContainer.innerHTML = moviesDetails.outerHTML;
				detailsContainer.setAttribute('data-id', movieId);
			}
		});

		// Task 3 - Add event listener for delete button (delete movie button or delete review button)
		detailsContainer.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'BUTTON') {
				var movieId = parseInt(detailsContainer.getAttribute('data-id')),
					reviewId = parseInt(ev.target.getAttribute('data-id')),
					genre = data[parseInt(moviesContainer.getAttribute('data-genre-id')) - 1],
					movie = genre.getMovies().filter(function (movie) {
						return movie._id === movieId;
					})[0];

				movie.deleteReviewbyId(reviewId);
				ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
			}
		})
	}

	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li');
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';

			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

	function loadMovieDetails(movie) {
		var movieDetails = document.createElement('div'),
			actors = document.createElement('ul'),
			reviews = document.createElement('ul'),
			actorsHeading = document.createElement('h2'),
			reviewsHeading = document.createElement('h2');

		movie.getActors().forEach(function (actor) {
			var liActor = document.createElement('li');
			liActor.setAttribute('data-id', actor._id);

			liActor.innerHTML = '<h3>' + actor.name + '</h3>';
			liActor.innerHTML += '<div><strong>Bio:</strong> ' + actor.bio + '</div>';
			liActor.innerHTML += '<div><strong>Born:</strong> ' + actor.born + '</div>';

			actors.appendChild(liActor);
		});

		movie.getReviews().forEach(function (review) {
			var liReview = document.createElement('li'),
				deleteButton = document.createElement('button');

			deleteButton.innerHTML = 'Delete Review';
			deleteButton.setAttribute('data-id', review._id);

			liReview.setAttribute('data-id', review._id);

			liReview.innerHTML = '<h3>' + review.author + '</h3>';
			liReview.innerHTML += '<div><strong>Content:</strong> ' + review.content + '</div>';
			liReview.innerHTML += '<div><strong>Date:</strong> ' + review.date + '</div>';

			liReview.appendChild(deleteButton);

			reviews.appendChild(liReview);
		});

		actorsHeading.innerHTML = 'Actors:';
		reviewsHeading.innerHTML = 'Reviews:';

		movieDetails.appendChild(actorsHeading);
		movieDetails.appendChild(actors);
		movieDetails.appendChild(reviewsHeading);
		movieDetails.appendChild(reviews);

		return movieDetails;
	}

	scope.loadHtml = loadHtml;
}(imdb));
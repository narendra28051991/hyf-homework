console.log("\n\nWorking with movies !!\n\n")

const movies = window.getMovies()

// Create an array of movies containing the movies with a short title (you define what short means)
const shortTitleMovies = movies.filter(movie => movie.title.length <= 2)
console.log("movies with a short title: ", shortTitleMovies)

// Create an array of movie titles with long movie titles
const longMovieTitles = movies
                            .map(movie => movie.title)
                            .filter(title => title.length >= 50)
console.log("\nlong movie titles: ", longMovieTitles)

// Count the number of movies made between 1980-1989 (including both the years)
const numberOfMovies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989).length;
console.log("\nmovies made between 1980-1989: ", numberOfMovies)

// Create a new array that has an extra key called tag.
// The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const moviesWithTag = movies.map(movie => {
    if (movie.rating >= 7) movie.tag = 'Good';
    else if (movie.rating >= 4 && movie.rating < 7) movie.tag = 'Average';
    else movie.tag = 'Bad';
    return movie;
})
console.log("\nmovies with tag: ", moviesWithTag)

// Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
const ratingOfTheMovies = moviesWithTag
                        .filter(movie => movie.rating >= 6)
                        .map(movie => movie.rating)
console.log("\nratings of movies greater than 6: ", ratingOfTheMovies)

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
// So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
// Can you make sure the search is case insensitive?
const keywordMovies = movies
                        .map(movie => movie.title.toLowerCase())
                        .filter(title => title.includes('surfer') || title.includes('alien') || title.includes('benjamin'))
console.log("\nmovies containing keywords: ", keywordMovies)

// Create an array of movies where a word in the title is duplicated.
// Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
// Here are some madeup examples of movies with duplicated words in the title:
// "The three men and the pistol", "Chase three - The final chase"
const titleWordDuplicated = movies.filter((movie, index) => {
    const splitTitle = movie.title.toLowerCase().split(" ")
    const filterTitle = splitTitle.filter((title, index) => splitTitle.indexOf(title) === index)
    return movie.title.toLowerCase() !== filterTitle.join(" ")
})
console.log("\nmovies where a word in the title is duplicated: ", titleWordDuplicated)

// Calculate the average rating of all the movies using reduce.
const sumOfRatings = movies.map(movie => movie.rating).reduce((accumulator, rating) => accumulator + rating)
const reduceRating = sumOfRatings / movies.length
const averageRating = Number( Math.round(reduceRating + 'e3') + 'e-3' )
console.log("\naverage rating of all the movies: ", averageRating)

// Count the total number of Good, Average and Bad movies using reduce.
// A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123}
const getMovieCount = (tags) => {
    const totalMovies = {}
    tags.forEach(tag => {
        totalMovies[`${tag.toLowerCase()}Movies`] = movies.filter(movie => movie.tag.toLowerCase() === tag.toLowerCase()).length;
    });
    return totalMovies;
}
console.log(getMovieCount(['Good', 'Average', 'Bad']))

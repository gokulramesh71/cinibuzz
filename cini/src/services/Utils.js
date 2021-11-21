
export const dateFormat = (inpDate) => {
    try {
        let date = new Date(inpDate);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    } catch (error) {
        return "";
    }
    
}

const options = { year: 'numeric', month: 'long', day: 'numeric' };

export const subTitle = (movieObj) => {
    let date = movieObj.release_date;
    let genreList = "";
    movieObj.genres.forEach((genr, ind, arr) => {
        genreList += genr.name;
        genreList += ind === arr.length -1 ? '':',';
    });
    let duration = Math.floor(movieObj.runtime/60) + 'h ' + movieObj.runtime % 60 + 'm';
    return date + ' (IN) |' + genreList + ' |' + duration;
}
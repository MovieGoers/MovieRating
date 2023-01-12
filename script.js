const movieNameText = document.createElement('h1');
const movieName = document.createElement('h2');



const averageRatingText = document.createElement('h1');
const averageRating = document.createElement('h2');


const movieRatingSelections = ['작품성', '연기', '오락성','스토리'];
const ratingValues = [1, 2, 3, 4, 5];
const ratingStars = ['★', '★★', '★★★', '★★★★', '★★★★★']



function ShowRatingOptions(){
    for (select in movieRatingSelections){
        let ratingText = document.createElement('h1');
        let movieRatingSelection = document.createElement('select');
        let movieRatingDiv = document.createElement('div');

        movieRatingDiv.setAttribute("class", "movie-rating-div");
        movieRatingSelection.setAttribute("id", movieRatingSelections[select]);
        movieRatingSelection.setAttribute("onchange", "onChangeRating()");

        ratingText.textContent = movieRatingSelections[select];
        
        let i = 0;
        for (ratevalue in ratingValues){
            let movieRatingOption = document.createElement('option');
            movieRatingOption.setAttribute('value', ratingValues[ratevalue]);
            movieRatingOption.textContent = ratingStars[i];
            movieRatingSelection.appendChild(movieRatingOption);
            i++;
        }
        
        movieRatingDiv.appendChild(ratingText);
        movieRatingDiv.appendChild(movieRatingSelection);

        document.body.appendChild(movieRatingDiv);
    }
}

function onChangeRating(){
    averageRating.textContent = CalculateAverageRating() + '/' + ratingStars.length;
}

function CalculateAverageRating(){
    let averageRateScore = 0;

    for(movieRates in movieRatingSelections){
        let tempRating = document.getElementById(movieRatingSelections[movieRates]);
        averageRateScore += Number(tempRating.options[tempRating.selectedIndex].value);
        
    }
    return averageRateScore / movieRatingSelections.length;
}

function ShowAverageRating(){
    averageRatingText.textContent = "평균 점수?";
    document.body.appendChild(averageRatingText);
    document.body.appendChild(averageRating);
}

function ShowMovieName(){
    movieNameText.textContent = "영화 제목";
    movieName.textContent = "아바타 2 : 물의 길";
    document.body.appendChild(movieNameText);
    document.body.appendChild(movieName);
}

ShowMovieName();
ShowRatingOptions();
ShowAverageRating();

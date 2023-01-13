const movieNameText = document.createElement('h1');
const movieName = document.createElement('h2');

const averageRatingText = document.createElement('h1');
const averageRating = document.createElement('h2');


const movieRatingSelections = ['작품성', '연기', '오락성','스토리', '미술', '촬영', '편집'];
const ratingValues = [1, 2, 3, 4, 5];
const ratingStars = ['★', '★★', '★★★', '★★★★', '★★★★★']

const SaveRatingsBtn = document.createElement('input');
SaveRatingsBtn.setAttribute('type', 'button');
SaveRatingsBtn.setAttribute('value', 'save');
SaveRatingsBtn.setAttribute('onclick', 'onClickSaveBtn()');
SaveRatingsBtn.setAttribute('class', 'btn btn-primary')

const ratingPage = document.getElementById("rating");

const arrAllMovieRatings = [];
// 각 원소는 [작품성, 연기, 오락성, 스토리, 평균 점수] 값을 가진다.

let clickedMovieTitle = -1;

function onClickSaveBtn(){
    let tempArrMovieRatings = [];
    for(movieRates in movieRatingSelections){
        let tempRating = document.getElementById(movieRatingSelections[movieRates]);
        tempArrMovieRatings.push(Number(tempRating.options[tempRating.selectedIndex].value));
    }
    tempArrMovieRatings.push(CalculateAverageRating());
    arrAllMovieRatings.push(tempArrMovieRatings);

    ratingPage.textContent = '';
}

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
        ratingText.setAttribute("class", 'ratingTextCSS');

        movieRatingDiv.appendChild(ratingText);
        movieRatingDiv.appendChild(movieRatingSelection);

        ratingPage.appendChild(movieRatingDiv);
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
    return (averageRateScore / movieRatingSelections.length).toFixed(2);
}

function ShowAverageRating(){
    averageRatingText.textContent = "평균 점수?";
    ratingPage.appendChild(averageRatingText);
    ratingPage.appendChild(averageRating);
}

function ShowMovieName(){
    movieNameText.textContent = "영화 제목";
    movieName.textContent = document.getElementById((i-1)+'-title-id').textContent;
    movieNameText.setAttribute('class', 'ratingTextCSS');
    ratingPage.appendChild(movieNameText);
    ratingPage.appendChild(movieName);
}
function ShowRatingPage(){
    ShowMovieName();
    ShowRatingOptions();
    ShowAverageRating();
    ratingPage.appendChild(SaveRatingsBtn);
}

function ShowUserRatedOptions(){
    for (select in movieRatingSelections){
        let ratingText = document.createElement('h1');
        ratingText.textContent = movieRatingSelections[select];
        
        document.getElementById('rating').appendChild(ratingText);
    }
}
function ShowUserRatedPage(){
    ratingPage.innerHTML = '';

    movieNameText.textContent = "영화 제목";
    movieName.textContent = document.getElementById((clickedMovieTitle)+'-title-id').textContent;
    let movieAverageText = document.createElement('h1');
    let movieAverageRating = document.createElement('h2');

    ratingPage.appendChild(movieNameText);
    ratingPage.appendChild(movieName);


    for (select in movieRatingSelections){
        let ratingText = document.createElement('h1');
        let movieRated = document.createElement('h2');

        ratingText.textContent = movieRatingSelections[select];
        ratingPage.appendChild(ratingText);
        movieRated.textContent = arrAllMovieRatings[clickedMovieTitle][select]+'/5';
        ratingPage.appendChild(movieRated);
    }
    movieAverageText.textContent = '평균 점수?';
    movieAverageRating.textContent = arrAllMovieRatings[clickedMovieTitle][movieRatingSelections.length]+'/5';

    ratingPage.appendChild(movieAverageText);
    ratingPage.appendChild(movieAverageRating);
}
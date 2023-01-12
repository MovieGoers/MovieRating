const movieNameText = document.createElement('h1');
const movieName = document.createElement('h2');
const whatsYourRating = document.createElement('h1');
const movieRating = document.createElement('select');

const averageRatingText = document.createElement('h1');
const averageRating = document.createElement('h2');

const ratingValues = ['onestar', 'twostar', 'threestar', 'fourstar', 'fivestar'];
const ratingStarts = ['★', '★★', '★★★', '★★★★', '★★★★★']

let i = 0;

for (ratevalue in ratingValues){
    let movieRatingOption = document.createElement('option');
    movieRatingOption.setAttribute('value', ratingValues[ratevalue]);
    movieRatingOption.textContent = ratingStarts[i];
    movieRating.appendChild(movieRatingOption);
    i++;
}

movieNameText.textContent = "영화 제목";
movieName.textContent = "아바타 2 : 물의 길";
whatsYourRating.textContent = "당신의 평점은?";
averageRatingText.textContent = "평균 점수?";

movieRating.setAttribute('title', 'movieRaing');
movieRating.setAttribute('onchange', 'onChange()');

document.body.appendChild(movieNameText);
document.body.appendChild(movieName);
document.body.appendChild(whatsYourRating);
document.body.appendChild(movieRating);
document.body.appendChild(averageRatingText);
document.body.appendChild(averageRating);



function onChange(){
    averageRating.textContent = movieRating.options[movieRating.selectedIndex].value;
    
}
const movieNameText = document.createElement('h1');
const movieName = document.createElement('h2');
const whatsYourRating = document.createElement('h1');
const movieRating = document.createElement('select');

const movieRatingStarFive = document.createElement('option');
const movieRatingStarFour = document.createElement('option');
const movieRatingStarThree = document.createElement('option');
const movieRatingStarTwo = document.createElement('option');
const movieRatingStarOne = document.createElement('option');

const averageRatingText = document.createElement('h1');
const averageRating = document.createElement('h2');

const ratingNames = ['', 'onestar', 'twostar', 'threestar', 'fourstar', 'fivestar'];
//나중에 setAttribute를 반복문을 통해서 설정하기 위해 선언한 배열.

movieNameText.textContent = "영화 제목";
movieName.textContent = "아바타 2 : 물의 길";
whatsYourRating.textContent = "당신의 평점은?";
averageRatingText.textContent = "평균 점수?";

movieRating.setAttribute('onchange', 'onChange()');

movieRatingStarFive.textContent = '★★★★★';
movieRatingStarFour.textContent = '★★★★';
movieRatingStarThree.textContent = '★★★';
movieRatingStarTwo.textContent = '★★';
movieRatingStarOne.textContent = '★';

movieRatingStarFive.setAttribute('value','fivestar');
movieRatingStarFour.setAttribute('value','fourstar');
movieRatingStarThree.setAttribute('value','threestar');
movieRatingStarTwo.setAttribute('value','twostar');
movieRatingStarOne.setAttribute('value','onestar');


movieRating.appendChild(movieRatingStarFive);
movieRating.appendChild(movieRatingStarFour);
movieRating.appendChild(movieRatingStarThree);
movieRating.appendChild(movieRatingStarTwo);
movieRating.appendChild(movieRatingStarOne);

document.body.appendChild(movieNameText);
document.body.appendChild(movieName);
document.body.appendChild(whatsYourRating);
document.body.appendChild(movieRating);
document.body.appendChild(averageRatingText);
document.body.appendChild(averageRating);



function onChange(){
    averageRating.textContent = movieRating.options[movieRating.selectedIndex].value;
    
}
const movieList = document.createElement("ol");
const menu = document.getElementById("menu");
const movieTitleNameTextBox = document.createElement("input");
const movieTitleNameSubmitButton = document.createElement("input");

movieTitleNameTextBox.setAttribute("type", "text");
movieTitleNameTextBox.setAttribute("id", "textbox-title");

movieTitleNameSubmitButton.setAttribute("type", "button");
movieTitleNameSubmitButton.setAttribute("value", "submit");

let i = 0;
function onClickAddMovieTitleToList(){
    document.getElementById('rating').innerHTML = '';

    let movieTitle = document.createElement("li");
    movieTitle.textContent = movieTitleNameTextBox.value;
    movieTitle.setAttribute('id', i+'-title-id');
    movieTitle.addEventListener('click', onClickTitle);
    movieList.appendChild(movieTitle);
    movieTitleNameTextBox.value = '';
    i++;

    ShowRatingPage();
}

function onClickTitle(event){
    //alert(event.target.id);
    
    for (storedRatings in arrAllMovieRatings){
        if(event.target.id === storedRatings+'-title-id'){
            clickedMovieTitle = storedRatings;
            ShowUserRatedPage();
        }

    } 
}

movieTitleNameSubmitButton.addEventListener("click", onClickAddMovieTitleToList);
movieTitleNameSubmitButton.setAttribute('class', 'btn btn-primary')

menu.appendChild(movieList);
menu.appendChild(movieTitleNameTextBox);
menu.appendChild(movieTitleNameSubmitButton);

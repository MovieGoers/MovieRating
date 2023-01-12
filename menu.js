const movieList = document.createElement("ol");
const menu = document.getElementById("menu");
const movieTitleNameTextBox = document.createElement("input");
const movieTitleNameSubmitButton = document.createElement("input");

movieTitleNameTextBox.setAttribute("type", "text");
movieTitleNameSubmitButton.setAttribute("type", "button");
movieTitleNameSubmitButton.setAttribute("value", "subnit");

let i = 0;
function onClickAddMovieTitleToList(){
    let movieTitle = document.createElement("li");
    movieTitle.textContent = movieTitleNameTextBox.value;
    movieTitle.setAttribute('id', i+'-title-id');
    movieList.appendChild(movieTitle);
    movieTitleNameTextBox.value = '';
    i++;
}

movieTitleNameSubmitButton.addEventListener("click", onClickAddMovieTitleToList);

menu.appendChild(movieList);
menu.appendChild(movieTitleNameTextBox);
menu.appendChild(movieTitleNameSubmitButton);

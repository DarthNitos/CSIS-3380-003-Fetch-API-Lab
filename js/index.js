const url = "https://dog.ceo/api/breeds/image/random";
const button = document.querySelector("#load-photo");

function getRandomDogPhoto() {
    return fetch(url)
        // Convert the data into JavaScript
        .then((response) => response.json())
        // Log out any errors
        .catch((error) => console.error(error));
}

async function init() {
    //  Call to loadSpinner() function
    loadSpinner();

    //  Make API request by calling getRandomDogPhoto() function
    //  Store the API response into the variable
    const data = await getRandomDogPhoto();

    //  Call to removeSpinner() function
    removeSpinner();

    //  Call to renderDogPhoto() function
    renderDogPhoto(data.message);
}

function renderDogPhoto(url) {
    //  Add img markup inside the "div" element with "container" id
    document.querySelector("#container").insertAdjacentHTML("beforeend", `<img src= "${url}" alt="Random photo of a dog" />`);
}

function loadSpinner() {
    const spinner = `../assets/loader.svg`;
    const img = `<img src="${spinner}" id="spinner" alt="Loading spinner image" />`;

    //  Disable the button
    button.disabled = true;

    //  Add img markup inside the button, so the "loader.svg" is displayed
    button.insertAdjacentHTML("afterbegin", img)
}

function removeSpinner() {
    //  Target the "img" tad with "spinner" id
    const spinner = document.querySelector(`img#spinner`);

    //  Remove the spinner
    spinner.parentElement.removeChild(spinner);
}

//  Call to init() function when the "Load Dog Photo" button is clicked
button.addEventListener("click", () => { init(); });
// get the button tag from HTML document
const btnEl = document.getElementById("btn")

// get the paragraph tag from the html document
const jokeEl = document.getElementById("joke")

//getting joke from API Ninjas 
const api_key = "Y51ALnsxSO24t2yjMzSPvg==BDjxoYFtXEGZa866"
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

const options = {
    method: "GET",
    headers: {"X-Api-Key": api_key}
}

//linking the API response to the button
async function getJoke(){
    try {
        jokeEl.innerText = "Updating..."
        btnEl.Disabled = true
        btnEl.innerText = "Loading..."

        const response = await fetch(apiURL, options)
        // convert API response to html doc using Json 
        const data = await response.json()
        // link the converted API data to the p tag on the HTML doc 
        jokeEl.innerText = data[0].joke

        btnEl.Disabled = false
        btnEl.innerText = "Tell me a joke"
    } catch(error){
        jokeEl.innerText = "An error occure, try again"
        btnEl.innerText = "Tell me a joke"
        console.log(error);
    }
}

// Call the function on button click
btnEl.addEventListener("click", getJoke) 

//NOTE:
//in line 15 we use await in order for js not to jump execute the next line 
// without getting API respont.
// consiquesly, without the 'await' the next line will have nothing to execute, thus,
//we get an exception
//secondly,  the "async" is used to turn the function to asyncronise function
//so that the "await" can work properly
 //To bring all the ratings class from html into JS using query select all
const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn")
const containerEl = document.getElementById("container")
let selectedRating = "";


//to add event listener to all the rating using foreach loop
ratingEls.forEach((ratingEl) =>{ 
    //listening to the click event
    ratingEl.addEventListener("click", (event) => {
        //Get text upon cliciking on any element in the div tag or the div itself (parentNode)
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

//function to remove all active effcet from each ratings

function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });

    
}

btnEl.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you</strong>
        <br><br>
        <strong>Feedback: ${selectedRating}</Strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})
//THIS COMMENT IS FOR CSS
//The .rating.active in the stylesheet, the function is to change the background color of the rating
//when the emoji is clicked (when the remark is selected). This effect is implemented here in this script

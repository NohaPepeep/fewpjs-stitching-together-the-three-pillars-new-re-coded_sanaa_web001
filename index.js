/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// We use this code, known as Objects, to control toggling like / unlike status

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: This code is what lets JavaScript find the elements that we want to make clickable.
// Without JavaScript, clicking on these heart shapes does nothing. Uncomment
// this code and refresh the demo page.

// let articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      // STEP 2: Uncomment the next 3 lines.
      // We'll use Pillar 1 (DOM Manipulation) to update the screen and
      // mimic Pillar 3 (Server Communication) to only update the screen if the
      // sending of information to the server succeeds.
      alert("You notified the server!");
      // alert(serverMessage);
      // heart.innerText = glyphStates[heart.innerText];
      // heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}


//for (let glyph of articleHearts) {
  //glyph.addEventListener("click", likeCallback);
//}

-

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}

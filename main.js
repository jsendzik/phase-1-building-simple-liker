// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");
errorModal.className = "hidden"
const hearts = document.getElementsByClassName("like-glyph")
//console.log(hearts)

function like(e) {
  if(e.target.innerText == EMPTY_HEART) {
    e.target.innerText = FULL_HEART;
    e.target.className = "activated-heart"
  } else {
    e.target.innerText = EMPTY_HEART;
    e.target.className = ""
  }
  
  mimicServerCall()
    .then(response => alert(response))
    .catch(error => {
      errorModal.className = "";
      errorModal.innerText = error;
      //console.log(error)
      setTimeout(() => {
        errorModal.className = "hidden"
        }, 3000)
      }
    )
}

for(glyph of hearts) {
  glyph.addEventListener("click", like)
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

document.querySelector("button").addEventListener("click",(event)=>{
event.preventDefault();
    jks();
})

async function jks(){

  try{
    // var gen =document.getElementById("pro").value ;
    var amount = document.getElementById("jokes").value;

    var res = await fetch(`https://v2.jokeapi.dev/joke/programming?blacklistFlags=religious,political,racist,sexist,explicit&type=single&amount=${amount}`);
    var rest = await res.json();
    // console.log(rest);
    
   ShowJoke(rest);
    
  }catch (error) {
    console.log(error);
    
   }
};

var box = document.getElementById("displayDiv");
var row = document.createElement("div");
row.classList.add("row");

function ShowJoke(value){
   const {jokes}= value;
//    var forin = Object.keys(value);
   console.log(jokes);
   

  jokes.forEach(joke => {
    console.log(joke);
    
 
        var col = document.createElement("div");
        col.className = "col-lg-12";
        col.innerHTML = `<div class="card">
  <div class="card-body">
    ${joke.joke}
  </div>
</div>`;
row.append(col);
box.append(row);
})

    };



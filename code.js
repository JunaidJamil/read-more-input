

function  add(){
    var inputs = document.getElementById("input").value
   var out = document.getElementById("output")
  if(out.length <= 20){
        out.innerText = inputs
  }
  else{
     out.innerHTML = inputs.slice(0 , 20) + `<button id="btns" onclick="reads()">Read More</button>`
         
  } 

}
function reads(){
    var inputs = document.getElementById("input").value

    var  out = document.getElementById("output")
    
    var butn = document.getElementById("btns");
    butn.innerHTML = "show less"
    out.innerHTML = `${inputs}<button onclick="showLess()">Show Less</button>`;

}


function showLess() {
    var inputs = document.getElementById("input").value;
    var out = document.getElementById("output");
    out.innerHTML = inputs.slice(0, 20) + "..." +`<button id="btns" onclick="reads()">Read More</button>`;
  }              
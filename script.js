console.log("hello");



function toCelcius() {

let Temp = document.getElementById("in").value;
if(Temp==""){
    document.getElementById("result").innerText = "Please Enter Any Value!";
}else{

  let fToC = ((Temp - 32) * 5) / 9;
  document.getElementById("result").innerText = fToC + "\xB0C";

}
}

function toFahrenheit() {
    let Temp = document.getElementById("in").value;
    if(Temp==""){
        document.getElementById("result").innerText = "Please Enter Any Value!";
    }else{

  let cToF = (Temp * 9) / 5 + 32;
  document.getElementById("result").innerText = cToF + "\xB0F";

}
}
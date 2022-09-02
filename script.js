console.log("hello");

function tempConvert(xyz) {
  console.log(xyz)
  let Temp = document.getElementById("in")?.value;

if(Temp===""){
    document.getElementById("result").innerText = "Please Enter Any Value!";
}else{
  (Temp=='celcius')?document.getElementById("result").innerText = ((Temp - 32) * 5) / 9 + "\xB0C":
  document.getElementById("result").innerText = (Temp * 9) / 5 + 32 + "\xB0F";
}
}

// function toFahrenheit() {
    // let Temp = document.getElementById("in").value;
    // if(Temp===""){
        // document.getElementById("result").innerText = "Please Enter Any Value!";
    // }else{


// }
// }
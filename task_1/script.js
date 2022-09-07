function tempConvert(convertTo) {
  let Temp = document.getElementById("in")?.value;
  if (Temp === "") {
    document.getElementById("result").innerText = "Please Enter Any Value!";
  } else {
    (convertTo === "celcius")
      ? (document.getElementById("result").innerText =
          Math.round(((Temp - 32) * 5) / 9) + "\xB0C")
      : (document.getElementById("result").innerText =
          Math.round((Temp * 9) / 5 + 32) + "\xB0F");
  }
}

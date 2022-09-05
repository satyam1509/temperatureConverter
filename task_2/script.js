const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },


];

//For showing content in console
library.forEach((element) => {
  let status = "";
  (element.readingStatus === true)?status = "you have already read this book.":status = "need to be read.";//checking reading status 
  
  console.log(
  "Title of the book is " + element.title +" whose author is " +element.author +" " +status );
});

// For displaying Data into table
let tbody = document.querySelector("tbody"); //returns the element that matches tbody
let rows = library.map((e) => {
  let td = document.createElement("tr");
  let author = `<td>${e.author}</td>`;
  let title = `<td>${e.title}</td>`;
  let readingStatus = `<td>${e.readingStatus}</td>`;

  (e.readingStatus === true) //adding class dynamically
    ? td.classList.add("success")
    : td.classList.add("danger");

  td.innerHTML = author + title + readingStatus;
  return td;
});
rows.forEach((n) => tbody.append(n));

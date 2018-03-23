let book = {
  title: "js"
};

book.author = "mario";
book["showBook"] = function() {
  console.log("------------------------------------");
  console.log(this.title + ", " + this.author);
  console.log("------------------------------------");
};

book.showBook();

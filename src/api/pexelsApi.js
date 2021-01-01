const fetch = require("node-fetch");

const key = "563492ad6f917000010000016b5faf330ec243be85721faa86d904e9";
//https://api.pexels.com/v1

fetch("https://api.pexels.com/v1/search?query=people", {
  method: "get",
  headers: {
    Authorization: key,
  },
})
  .then((res) => {
    res.json();
  })
  .then((json) => console.log(json))
  .catch((err) => {
    console.log("Dude...");
  });

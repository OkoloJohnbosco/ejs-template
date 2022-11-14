const express = require("express");
const app = express();

const port = 3000;

// Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// set views
app.set("views", "./views");
app.set("view engine", ".ejs");

app.get("", (req, res) => {
  // res.sendFile(__dirname + "/views/index.html")
  // res.send("/views/index.html")
  res.render("index", {
    text: "this is ejs",
    profiles: [
      { name: "Johnboscc", gender: "m" },
      { name: "Goodness", gender: "f" },
      { name: "Eze", gender: "m" },
    ],
  });
});

app.get("/about", (req, res) => {
  // res.sendFile(__dirname + "/views/index.html")
  // res.send("/views/index.html")
  console.log(req.params);
  res.render("about", {
    text: "this is ejs",
    data: { userQuery: req.params.userQuery, results: ["Johnbosc", "kdkdk"] },
  });
});
// Listen on port 3000
app.listen(port, () => console.info("Listening on port ${port}"));

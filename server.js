const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/data", (req, res) => {
  var data = [
    {
      id: 1,
      image:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F5d%2F4e%2F91%2F5d4e914146b111722013b7740028e2fe.jpg&type=sc960_832",
      name: "정상준",
      birthday: "001126",
      gender: "남자",
      job: "취업준비생",
    },
    {
      id: 2,
      image:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F21%2Ff9%2F83%2F21f98377d0d9f9efc27dfc19323d2c95.jpg&type=sc960_832",
      name: "홍길동",
      birthday: "991123",
      gender: "남자",
      job: "프로그래머",
    },
    {
      id: 3,
      image:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F21%2Ff9%2F83%2F21f98377d0d9f9efc27dfc19323d2c95.jpg&type=sc960_832",
      name: "손흥민",
      birthday: "901010",
      gender: "남자",
      job: "축구선수",
    },
  ];
  res.json(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

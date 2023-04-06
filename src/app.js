import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

const profiles = [];

const tweets = [];


app.get("/tweets", (request, response) => {
  if (tweets.length === 0) {
    response.send([]);
    return
  }
  const lastTenTweets = tweets.slice(-10);
  const tweetsWithAvatar = lastTenTweets.map(tweet => {
    const profile = profiles.find(profile => profile.username === tweet.username);
    return {
      ...tweet,
      avatar: profile.avatar
    };
  });
  response.send(tweetsWithAvatar);
});


app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  if (typeof username !== "string" || username === "" || 
      typeof avatar !== "string" || avatar === "") {
    res.status(400).send("Todos os campos são obrigatórios!");
    return
  } else {
    profiles.push({ username, avatar });
    res.status(200).send("OK");
    return
  }
});
app.post("/tweets", () => {
  








})

app.listen(PORT, () => console.log(`Server online port ${PORT}.`));

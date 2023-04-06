import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 5000;

const profiles = [
  {
    username: "bobesponja",
    avatar:
      "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
  },
  {
    username: "bobesponja",
    avatar:
      "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
  },
  {
    username: "bobesponja",
    avatar:
      "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
  },
];

const tweets = [
  {
    username: "bobesponja",
    tweet: "Eu amo hambúrguer de siri!",
  },
];


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


app.post("/sign-up", () => {
  

})

app.post("/tweets", () => {
  

})

app.listen(PORT, () => console.log(`Server online port ${PORT}.`));

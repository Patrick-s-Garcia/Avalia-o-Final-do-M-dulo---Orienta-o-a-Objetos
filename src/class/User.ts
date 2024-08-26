import { randomUUID } from "crypto";
import { tweetDB } from "../database/TweetDb";
import { userDB } from "../database/UserDb";
import { TweetType, UserType } from "../types";
import Tweet from "./Tweet";
import TweetNormal from "./TweetNormal";
import TweetReply from "./TweetReply";

class User {
  private id: string;
  name: string;
  email: string;
  username: string;
  pass: string;
  following: User[] = [];

  constructor(user: UserType) {
    const verifyUser = userDB.find((item) => item.username === user.username);
    if (verifyUser) {
      throw new Error(`Usuario já existe`);
    }
    this.id = randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.username = user.username;
    this.pass = user.pass;
    userDB.push(user);
  }

  getId() {
    return this.id;
  }

  followUser(user: User) {
    if (user.id === this.id) {
      throw new Error("Você não pode seguir você mesmo.");
    }
    return this.following.push(user);
  }

  getFollowingList() {
    return this.following.forEach((item) => console.log(item.id));
  }

  sendTweet(tweet: TweetType) {
    const newTweet = new TweetNormal(tweet);
    return tweetDB.push(newTweet);
  }

  likeTweet(tweet: Tweet) {
    if (tweet.user.username === this.username) {
      throw new Error("Você não pode curtir seu próprio tweet.");
    }
    
    tweet.likes.push(this);
  }

  showTweets() {
    // tweetDB.map(item => console.log(item))
    tweetDB.forEach((item) => {
      if (item.user.id === this.id && item.type === "normal") {
        return console.log(
          `@${this.username}: ${item.content}\n     <${item.likes?.length}>\n     <replies>`
        );
      }
    });
  }

  showFeed() {
    tweetDB.forEach((item) => {
      if (item.user.id === this.id) {
        return console.log(
          `@${this.username}: ${item.content}\n     <${item.likes?.length}>\n     <replies>`
        );
      }
    });
  }



  replyTweet(tweet: Tweet, content: string) {
    if (tweet.user.username === this.username) {
      throw new Error("Não é possivel replicar seu próprio tweet");
    }
    const newTweet = new TweetReply({
      content: content,
      type: "reply",
      user: this,
    });
    tweet.replies.push(newTweet);
    const holder = new TweetReply({
      id: newTweet.id,
      user: newTweet.user,
      content: newTweet.content,
      type: newTweet.type,
      likes: newTweet.likes,
      replies: newTweet.replies,
    })
    return tweetDB.push(holder);
  }

  showFeedTweets() {
    tweetDB.forEach((tweet) => {
      if (tweet.user.username === this.username) {
        console.log(`@${this.username}: ${tweet.content}`);
        let likes = tweet.likes.length;
        console.log(`[${likes} Likes]`);
        tweet.replies.forEach((reply) => {
          console.log(`>${reply.user.username}: ${reply.content}`);
        });
      }
    });
  }
  
}

export default User;
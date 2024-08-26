import { tweetDB } from "./database/TweetDb";
import { TweetNormal, TweetReply } from "./class";
import User from "./class/User";

const patrick = new User({ email: "patrick@gmail.com", name: "patrick", pass: "123456789", username: "usuarioPatrick" });
const anderson = new User({ email: "anderson@gmail.com", name: "anderson", pass: "testtee", username: "usuarioAnderson" });
const emanoel = new User({ email: "emanoel@gmail.com", name: "emanoel", pass: "98765444", username: "usuarioEmanoel" });
const marcio = new User({ email: "marcio@gmail.com", name: "marcio", pass: "teste123", username: "usuarioMarcio" });


const tweet1 = new TweetNormal({ content: "teste 1° tweet.", type: "normal", user: patrick });
const tweet2 = new TweetNormal({ content: "teste 2° tweet", type: "normal", user: patrick });
const tweet3 = new TweetReply({ content: "teste 3° tweet", type: "reply", user: patrick });
const tweet4 = new TweetNormal({ content: "teste 4° tweet", type: "normal", user: emanoel });

patrick.sendTweet(tweet1);
patrick.sendTweet(tweet2);
patrick.sendTweet(tweet3);
emanoel.sendTweet(tweet4)

patrick.followUser(emanoel);
patrick.followUser(marcio);
patrick.likeTweet(tweet4);
marcio.likeTweet(tweet4);
anderson.likeTweet(tweet4);
anderson.likeTweet(tweet1);
marcio.likeTweet(tweet1);
emanoel.replyTweet(tweet2, "Muito legal esse Tweet");
marcio.replyTweet(tweet2, "Legal mesmo")
marcio.likeTweet(tweet2)
patrick.likeTweet(tweet4)
patrick.replyTweet(tweet4, "top")



///tweet2.showReplies()
//tweet4.showLikes()
//tweet1.show()
//patrick.showTweets()
patrick.showTweets()
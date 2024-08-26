import { TweetType } from "../types";
import Tweet from "./Tweet";

class TweetReply extends Tweet{
    constructor(tweet: TweetType){
        super(tweet)
        this.type = "reply"
    }
}

export default TweetReply
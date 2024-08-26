import { TweetType } from "../types";
import Tweet from "./Tweet";

class TweetNormal extends Tweet{
    constructor(tweet: TweetType){
        super(tweet)
        this.type = "normal"
    }
}

export default TweetNormal
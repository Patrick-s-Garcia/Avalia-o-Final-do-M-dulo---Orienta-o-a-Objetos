import User from "../class/User"

interface TweetType{
    id?: string
    user: User
    content: string
    type: string
    likes?: User[]
    replies?: TweetType[]
}

export default TweetType
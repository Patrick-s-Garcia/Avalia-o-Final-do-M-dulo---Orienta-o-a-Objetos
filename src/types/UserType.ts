import User from "../class/User"



interface UserType{
    id?: string
    name: string
    email: string
    username: string
    pass: string
    following?: User[]
}

export default UserType
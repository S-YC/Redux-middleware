import axios from "axios";

export const getPost = id =>
    axios.get(`htts://jsonplaceholder.typicode.com/posts/${id}`)

export const getUsers = (id) => 
    axios.get(`htts://jsonplaceholder.typicode.com/users`)
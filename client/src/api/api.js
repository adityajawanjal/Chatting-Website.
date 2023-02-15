import axios from "axios";

const url = "http://localhost:5000";
export const adduser = async(data) =>{
    try {
       await axios.post(`${url}/add`,data)
    } catch (err) {
        console.log(err);
    }
}
export const getAllUsers = async(data) =>{
    try {
      const allUsers = await axios.get(`${url}/users`);
      return allUsers.data;
    } catch (err) {
        console.log(err);
    }
}
export const startConversation = async(data) =>{
    try {
      await axios.post(`${url}/conversation/add`,data);
    } catch (err) {
        console.log(err);
    }
}


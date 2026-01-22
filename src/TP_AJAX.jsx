import { useState, useEffect } from 'react'
import axios from 'axios';
import Post from './compenents/post';
import './App.css'

function DesplayUsers() {
  const [users, setUsers] = useState([]);
  
  const [searchInput, setSearchInput] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  
  const findUser = users.find(
    (user) => user.id === Number(searchInput));
  
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data)
    }
    getData();
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
  }

  return (
    <>
      <h1>USERS!</h1>

      <form onSubmit={handleSubmit} action="#">
        <input 
          type="text" 
          value={searchInput} 
          placeholder='enter an ID' 
          onChange={(e) => setSearchInput(e.target.value)} 
          />
        <input type="submit" value="submit" />
      </form>

      {
        isSubmited && !findUser ?
          <p>choose a valid ID</p> : ""
      }

      { 
        isSubmited && findUser ?
          <Post user={findUser} /> 
        : ""
      }

    </>
  )
}

export default DesplayUsers;

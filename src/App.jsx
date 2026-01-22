import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './card';

import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  const findUser = users.find((user) => user.id === Number(search));


  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/');
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
          value={search} 
          placeholder='enter an ID' 
          onChange={(e) => setSearch(e.target.value)} 
          />
        <input type="submit" value="submit" />
      </form>

      {
        isSubmited && !findUser ?
          <p>choose a valid ID</p> : ""
      }

      { 
        isSubmited && findUser ?
          <Card 
            key={findUser.id}
            name={findUser.name} 
            username={findUser.username} 
            email={findUser.email} 
            city={findUser.address.city} /> : ""
      }
    </>
  )
}

export default App

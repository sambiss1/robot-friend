import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);



  const searchUser = (event) => {
    setSearchTerm(event.target.value)
    setFilteredUsers(users.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())))
    // console.log(filterUser);
  }
  // useEffect(() => {
  //   searchUser();

  // }, [searchTerm])


  return (
    <div className="App">
      <h1>Mes Amis ROBOTS</h1>

      <input type="search" placeholder="Rechercher par un nom" value={searchTerm} onChange={searchUser} />
      <div className='container'>

        {searchTerm.length === 0 ? (

          users.map(user => user.name &&
            <div className='card'>
              <img src={`https://robohash.org/${user.id}`} alt="robot" />
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
            </div>
          )

        ) : (
          filteredUsers.map(user => user.name &&
            <div className='card'>
              <img src={`https://robohash.org/${user.id}`} alt="robot" />
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
            </div>
          )
        )

        }

      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState([]);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //       const json = await response.json();
  //       setMyData(json);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setMyData(response.data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = myData.filter(user =>
    // user.id.toString() === search.trim()
    //  &&
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.phone.toLowerCase().includes(search.toLowerCase()) ||
    user.website.toLowerCase().includes(search.toLowerCase()) ||
    user.company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      {filteredData.map(user => (
        <div key={user.id}>
         
          <h2>{user.name}</h2>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

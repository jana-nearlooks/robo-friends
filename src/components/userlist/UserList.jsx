import React, { useState, useEffect } from "react";
import UserCard from "../usercard/UserCard";
import "./UserList.css";
import Input from "../input/Input";

const UserList = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredData, setFilteredData] = useState(null); // State for filtered data

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setFilteredData(data.results); // Set initial filtered data
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  // Filter the data based on the search query
  useEffect(() => {
    if (data) {
      const filtered = data.filter(
        (user) =>
          user.name.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }

    console.log(data);
  }, [searchQuery, data]);

  return (
    <div>
      <h1 className="title">Robo Friends</h1>

      {/* Search input */}
      <div className="search-container">
        <Input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* User list */}
      <div className="user-list">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((user) => (
            <UserCard key={user.login.uuid} user={user} />
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;

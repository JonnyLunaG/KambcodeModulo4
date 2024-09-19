import React, { useState } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  const [searchParam, setSearchParam] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const handleSearch = () => {
    onSearch({ searchParam, gender, status });
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchParam} 
        onChange={(e) => setSearchParam(e.target.value)} 
        placeholder="Buscar por nombre"
      />
      
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Genero</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}

export default Search
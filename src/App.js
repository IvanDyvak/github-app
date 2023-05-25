import React, { useState } from "react";
import GitHubUser from "./components/GitHubUser";
import SearchForm from "./components/SearchForm";
import './App.css';


export default function App() {
  const [inputValue, setInputValue] = useState('');
    function handleInputChange(event) {
        event.preventDefault();
        const inputString = document.querySelector('.input-field').value;
        setInputValue(inputString);
        document.querySelector('.input-field').value = '';
    }
  return (
      <>
          <h1 style={{ textAlign: 'center' }}>Search GitHub User</h1>

          <div className="input-block">
              <SearchForm />
              <button className="input-block__btn" onClick={handleInputChange}>
                  Search
              </button>
          </div>
        <GitHubUser login={inputValue} />
      </>
  )
}

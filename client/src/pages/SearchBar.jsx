import React from 'react';

function SearchBar() {
  return (
  <form className="d-flex">
  <input className="form-control me-2"
      type="text"
      placeholder="Encuentra tu producto"
      aria-label="Search"
      autoComplete="off"
      value="" 
      onChange=""
  />
  <button className="btn btn-outline-light" type= "submit"
      onClick= " "
      >Buscar
  </button>
</form>
  )}

export default SearchBar;

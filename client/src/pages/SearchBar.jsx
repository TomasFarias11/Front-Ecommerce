import React from 'react';
import { useEffect, useState } from "react";
import {getProductByName} from '../actions/actionProducts.js'
import {useDispatch} from 'react-redux';

function SearchBar() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  useEffect(() => {
    dispatch(getProductByName(name))
  }, [dispatch, name])
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
        dispatch(getProductByName(name));
    }
  };


  return (
  <form className="d-flex">
  <input className="form-control me-2"
      type="text"
      placeholder="Encuentra tu producto"
      aria-label="Search"
      autoComplete="off"
      value={name}
      onChange={(e) => handleChange(e)}
  />
  <button className="btn btn-outline-light" type= "submit"
      onClick= {(e) => handleSubmit(e)}
      >Buscar
  </button>
</form>
  )}

export default SearchBar;

import React from 'react';
import { useEffect, useState } from "react";
import {getProductByName} from '../actions/actionProducts.js'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';

function SearchBar() {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  useEffect(() => {
    dispatch(getProductByName(name))
  }, [dispatch, name],)


  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
        dispatch(getProductByName(name));
        Navigate(`/search`)
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

/* import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import {getProductByName} from '../actions/actionProducts.js'

const SearchBar = ({ getProductByName }) => {

    const [state, setState] = useState({
        search: ''
    })
    const handleChange = ({ target: { name, value } }) => {
        setState({ [name]: value })
    }
    const handleSearch = () => {
        getProductByName(state.search)
    }
    useEffect(()=>{
      console.log('estadouse',state.search)
    },[state.search])
    console.log('estado',state.search)
    return (
      <form className="d-flex">
                <input
                    type="text"
                    placeholder="Encuentra tu producto"
                    aria-label="Search"
                    autoComplete="off"
                    value={state.search}
                    onChange={handleChange} />
                { state.search ? (<button onClick={handleSearch} className="btn btn-outline-light">Buscar</button>): (<button className="btn btn-outline-light">Buscar</button> )}
      </form>
    )
}

export default connect(null, { getProductByName })(SearchBar) */
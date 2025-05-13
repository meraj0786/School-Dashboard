import React from 'react'
import { IoIosSearch } from "react-icons/io";

function SearchBox() {
  return (
    <div className='searchBox d-flex align-items-center'>
        <IoIosSearch/>
        <input type='text' placeholder='search here...'/>
    </div>
  )
}

export default SearchBox;

import React from "react"
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import './SearchForm.css'
const SearchForm = () => {
    return (
        <div className="search-form">
            <div className="container">
                <div className="search-from-content">
                    <form className="search-form">
                        <div className="search-form-elem flex flex-sb bg-white">
                            <input type="text" className="form-control" placeholder="Search your services here" />
                            <button type="search" className="flex flex-c" >
                                <IoSearch className="text-purple" size={32} />
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default SearchForm
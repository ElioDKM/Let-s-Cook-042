import { useState } from "react"
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";


export default function SearchBar({ handleChange, searchInput }) {


      return (
        <div className="w-9/12">
            <div className="relative flex items-center w-full h-12 rounded-xl shadow-lg bg-red-300 overflow-hidden pr-5">
                <div className="grid place-items-center h-full w-10 text-red-800">
                    <SearchIcon></SearchIcon>
                </div>
                <input className="w-full bg-red-300 active:none"  type="text" placeholder="Search here" onChange={handleChange} value={searchInput} /> 
            </div>
        </div>
      )

}
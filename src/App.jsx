import './App.css'
import { useState } from "react"

import recettes from './assets/json/recettes.json'
import Card from './Composant/Card/Card';

function App() {
  console.log(recettes);
  const [searchInput, setSearchInput] = useState("");
  const [tabFiltred, setTabFiltred] = useState([])

  const handleChange = (e) => {
    setTabFiltred([])
    if (!searchInput.trim()) return;
    setSearchInput(e.target.value.toLowerCase());
    setTabFiltred(recettes.filter((recette) => recette.category.toLowerCase().includes(searchInput)))
  };
  



  return (
    <>
    <div className=' max-w-6xl mx-[auto]'>
      <h1 className='text-5xl font-semibold text-red-800'>Let's Cook</h1>
      <div>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput} />
      </div>
      <Card data={tabFiltred.length > 0 ? tabFiltred : recettes}></Card>
    </div>
    </>
  )
}

export default App

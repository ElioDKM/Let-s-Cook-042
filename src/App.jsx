import './App.css'
import { useState, useEffect } from "react"
import recettes from './assets/json/recettes.json'
import Card from './Composant/Card/Card';
import SearchBar from './Composant/Searchbar/SearchBar';
import ButtonLike from './Composant/ButtonLike/ButtonLike';
console.log("Recettes :");
console.log(recettes);

function App() {

  const [tabFiltred, setTabFiltred] = useState([])
  const [tabLiked, setTabLiked] = useState([])
  const [likePage, setLikePage] = useState(false)
  const [searchInput, setSearchInput] = useState("");
    

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  
  function likeFiltre() {
    const filteredlike = recettes.filter((recette) => recette.isLike);
    setTabLiked(filteredlike)
  }
  useEffect(() => likeFiltre(), [likePage])
  

  function filtrage() {
    let filtred
    if (!likePage) {
      filtred = recettes.filter((recette) => {
        return recette.category.toLowerCase().includes(searchInput.toLowerCase()) || recette.description.toLowerCase().includes(searchInput.toLowerCase())
      })
    }else{
      filtred = tabLiked.filter((recette) => {
        return recette.category.toLowerCase().includes(searchInput.toLowerCase()) || recette.description.toLowerCase().includes(searchInput.toLowerCase())
      })
    }
    setTabFiltred(filtred)
  }
  useEffect(() => filtrage(), [searchInput, likePage])

  return (
    <>
      <div className=' max-w-6xl mx-[auto] px-1 py-8'>
        <h1 className='text-5xl font-semibold text-red-800 mb-8'>Let's Cook</h1>
        <div className='flex w-full gap-8 mb-4'>
          <SearchBar handleChange={handleChange} searchInput={searchInput}></SearchBar>
          <ButtonLike setLikePage={setLikePage} likePage={likePage} setTabLiked={setTabLiked} recettes={recettes}></ButtonLike>
        </div>
        {!likePage ? (
          <>
            {tabFiltred.length == recettes.length ? (
              <h3 className='text-xl'>Toutes les recettes :</h3>
            ) : (
              <h3 className='text-xl'>Résultats de la recherche :</h3>
            )}
            {tabFiltred.length === 0 ?  <p>Not found</p> : <Card data={tabFiltred}></Card> }
          </>
        ) : (
          <>
            <h3 className='text-xl'>Recettes favorites :</h3>
            {tabFiltred.length === 0 ?  <p>Not found</p> : <Card data={tabFiltred}></Card> }           
          </>
        )}
      </div>
    </>
  );
}

export default App

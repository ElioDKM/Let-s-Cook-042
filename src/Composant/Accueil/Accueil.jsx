import { useState, useEffect } from "react";
import recettes from "../../assets/json/recettes.json";
import Card from "../Card/Card";
import SearchBar from "../Searchbar/SearchBar";
import ButtonLike from "../ButtonLike/ButtonLike";
import Select from "../Select/Select";

function Accueil() {
  const [tabFiltred, setTabFiltred] = useState([]);
  const [likePage, setLikePage] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [categorieSelect, setCategorieSelect] = useState("All")


  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  function filtrage() {
    const filtred = recettes.filter((recette) => {
      const recherche =
        recette.category.toLowerCase().includes(searchInput.toLowerCase()) ||
        recette.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        recette.title.toLowerCase().includes(searchInput.toLowerCase());
      return likePage ? 
        categorieSelect == "All" ? recette.isLike && recherche : recette.isLike && recherche && (recette.category == categorieSelect)
      : 
        categorieSelect == "All" ? recherche : recherche && (recette.category == categorieSelect);
    });
    
    setTabFiltred(filtred);
  }
  useEffect(() => {
    filtrage();
  }, [searchInput, likePage, categorieSelect]);

  function reset() {
    recettes.map((recette) => {
      recette.isLike = false
      filtrage()
    })
  }

  return (
    <>
      <div className=" max-w-6xl mx-[auto] px-1 py-8">
        <h1 className="text-5xl font-semibold text-red-800 mb-8">Let's Cook</h1>
        <div className="flex items-center justify-between w-full gap-8 mb-4">
          <SearchBar handleChange={handleChange} searchInput={searchInput}></SearchBar>
          <Select setCategorieSelect={setCategorieSelect} categorieSelect={categorieSelect}></Select>
          <ButtonLike setLikePage={setLikePage} likePage={likePage} recettes={recettes}></ButtonLike>
          {likePage ? 
            <button type="button" onClick={() => reset()} className="text-white w-20 bg-red-300 hover:bg-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center  ">Reset</button> 
          : 
            <div className="w-20"></div>
          }
        </div>
        {!likePage ? (
          <>
            {tabFiltred.length == recettes.length ? (
              <h3 className="text-xl">Toutes les recettes :</h3>
            ) : (
              <h3 className="text-xl">Résultats de la recherche :</h3>
            )}
            {tabFiltred.length === 0 ? ( <p>Oups, aucunes recettes ne correspond...</p> ) : ( <Card data={tabFiltred}></Card> )}
          </>
        ) : (
          <>
            <h3 className="text-xl">Recettes favorites :</h3>
            {tabFiltred.length === 0 ? ( <p>Ce que tu cherches n'est pas ici...</p> ) : ( <Card data={tabFiltred}></Card> )}
          </>
        )}
      </div>
    </>
  );
}

export default Accueil;

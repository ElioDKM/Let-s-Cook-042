import { useEffect } from "react"


export default function Select({ setCategorieSelect, categorieSelect }) {
    const categoriesTab = ["Burger", "Tacos", "Pizza", "Pasta", "Salad", "Viande", "Vegan", "Sushis", "Dessert", "Monde", "Breakfast", "Mer"]

useEffect(() => console.log(categorieSelect), [categorieSelect])

    return (
        <form className="max-w-sm ">
        <select value={categorieSelect} onChange={(e) =>setCategorieSelect(e.target.value) } className="bg-red-300 border border-red-800 text-red-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          <option defaultValue="All">All</option>
          {categoriesTab.map((categorie, index) => (
            <option key={index} value={categorie}>{categorie}</option>
          ))}
        </select>
      </form>
    )
}
import React, { useState } from "react";
import "./App.css";
import Input from "./components/forms/input";
import Checkbox from "./components/forms/checkbox";
import ProductCategoryRow from "./components/product/productCategoryRow";
import ProductRow from "./components/product/productrow";
import PriceRangeInput from "./components/range/priceRange";
const products = [
  { category: "Fruits", name: "Pomme", price: 1.99, stocked: true },
  { category: "Légumes", name: "Carotte", price: 8.99, stocked: true },
  { category: "Fruits", name: "Banane", price: 0.79, stocked: true },
  { category: "Légumes", name: "Tomate", price: 9.49, stocked: false },
  { category: "Fruits", name: "Fraise", price: 3.99, stocked: true },
  { category: "Légumes", name: "Brocoli", price: 1.49, stocked: true },
  { category: "Fruits", name: "Orange", price: 5.29, stocked: false },
];

function App() { 

  const  [showStockeOnly, setShowStockeOnly] = useState(false);
  const  [searchWord, setSearchWord] = useState("");
  const [ranger, setRanger] = useState(0)

  const handlePriceChanhe = (newPriceChange) => {
    setRanger(newPriceChange)
  }

  const visibleProduit = products.filter((prod) =>{
    if (showStockeOnly && !prod.stocked){
      return false;
    }
    if(searchWord && !prod.name.toLowerCase().includes(searchWord)) {
      return false;
    }
    if (ranger && prod.price > ranger) {
      return false;
    }
    return true
    })

  return (
    <div className="container mx-auto">
      <SearchBar 
        showStockeOnly = {showStockeOnly} 
        search = {searchWord}
        onSearchChange = {setSearchWord}
        onStokedOnlyChange = {setShowStockeOnly}
      />
      <PriceRangeInput
       onPriceChange = {handlePriceChanhe}
      />
      <p>la valeur selectioner est {ranger}</p>
      <ProductTable 
        products={visibleProduit} 
      />
    </div>
  )
}

function SearchBar({showStockeOnly, onStokedOnlyChange, search,onSearchChange }) {
  return (
    <div className="container mx-auto">
      <div className="mb-3">
        <Input 
          value= {search} 
          onChange={onSearchChange} 
          placeholder="recherche..." 
        />

        <Checkbox
          id="stocked"
          checked={showStockeOnly}
          onChange={onStokedOnlyChange}
          label="n'afficher que les produit en stock"
        />
      </div>
    </div>
  );
}

function ProductTable({ products }) {
/* 
si les choses sont ordoné alors ca devrais marcher
  for (let produit of products) {
    if (produit.category  !== lastCategory) {
      row.push(<ProductCategoryRow key = {produit.category} name={produit.category} />);
    }
    lastCategory = produit.category
    row.push(<ProductRow key= {produit} product={produit} />);
  } */
// si les choses ne sont pas ordonné c'est mieux de faire comme ca
  const categories = {};
  let lastCategory = null;

  // Regrouper les produits par catégorie
  products.forEach((product) => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });

  // Construire les lignes du tableau à partir des produits regroupés par catégorie
  const rows = [];
  for (const [category, products] of Object.entries(categories)) {
    rows.push(<ProductCategoryRow key={category} name={category} />);
    products.forEach((product) => {
      rows.push(<ProductRow key={product.name} product={product} />);
    });
  }

  return (
    <div className="overflow-x-auto overflow-y-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">nom</th>
            <th className="px-4 py-2">produit</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default App;

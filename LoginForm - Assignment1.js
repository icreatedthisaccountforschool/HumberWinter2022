import React, { useState } from "react";
import "./Styling - Assignment1.css";

export const LoginForm = ({username, setUsername, password, setPassword, setIsAdmin}) => {
  console.log("Login form rendered");
  const adminCreds = {username: "admin", password: "admin"};
  const handleLogin = (event) => {
    if (username === adminCreds.username && password === adminCreds.password) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        disabled={username.length === 0 || password.length === 0}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
  return form;
};

const clothingListTorso = [
    { id: "111", name: "T-Shirt", price: "9.99", description: "your mom", stock: "128" },
    { id: "222", name: "Blouse", price: "99.99", description: "your dad", stock: "256" },
    { id: "333", name: "Tanktop", price: "9.99", description: "your sister", stock: "512" },
  ];
const clothingListLegs = [
    { id: "444", name: "Jeans", price: "99.99", description: "your brother", stock: "768" },
    { id: "555", name: "Skirt", price: "99.99", description: "your uncle", stock: "1024" },
    { id: "666", name: "Shorts", price: "9.99", description: "your aunt", stock: "0" },
  ];
  export const clothingList = () => {
    console.log('Clothing list rendered');
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [isReactCatalogue, setReactCatalogue] = useState(false);
    const [clothingList, setClothingList] = useState(clothingListForReactProgramming); 
    const addClothing = (clothing) => {
      clothingList({...clothingList, clothing})
    };
    return (
      <div className="clothing-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>  
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {clothingList.map(({id, name, price, description, stock}, index) => (
              <tr key={index}>
                <td>{id}</td>  
                <td>{name}</td>
                <td>{price}</td>
                <td>{description}</td>
                <td>{stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => setReactCatalogue((prevState) => !prevState)}>
          Switch Catalogue
        </button>
        <AddClothesForm id={id} setId={setId} name={name} setName={setName} price={price} setPrice={setPrice} description={description} 
        setDescription={setDescription} stock={stock} setStock={setStock} addClothing={addClothing}/>
      </div>
    );
  };
  
export const AddClothesForm = ({id, setId, name, setName, price, setPrice, description, setDescription, stock, setStock, addClothing}) => {
  return(
    <div>
      <h1>AddClothesForm</h1>
      <label>ID: </label>
      <input type ={number} value={id} onChange={(e) => setId(e.target.value)}></input>
      <label>Name: </label>
      <input type ={text} value={name} onChange={(e) => setName(e.target.value)}></input>
      <label>Price: </label>
      <input type ={number} value={price} onChange={(e) => setPrice(e.target.value)}></input>
      <label>Description: </label>
      <input type ={text} value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <label>Stock: </label>
      <input type ={number} value={stock} onChange={(e) => setStock(e.target.value)}></input>
      <button onClick={() => addClothing({id: id, name: name, price: price, description: description, stock: stock})}>Add Clothing</button>
    </div>
  )
}

export const SearchForm = () => {
  console.log("Update form rendered");
  const [search, setSearch] = useState("");
  //const navigate = useNavigate();
  //const handleSearch = (event) => {
  //navigate("/clothingList");
  };
  const searchBar = document.forms['search_form'].querySelector('input');
  searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const clothes = list.getElementsByTagName('td');
    Array.from(clothes).forEach(function(clothing)){
      const name = clothing.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) != -1){
        clothing.style.display = 'block'; 
      } else {
          clothing.style.display = 'none';
      }
      }
  })   
  const form = (
      <div className="search_form">
      <input type="text" placeholder="Search..">              
      </input>
      </div>
  );
    
  return form;
  };
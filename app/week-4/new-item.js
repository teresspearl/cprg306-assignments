"use client";   
import { useState } from "react";

export default function NewItem() {
        const [name, setName] = useState("");
        const [quantity, setQuantity] = useState(1);
        const [category, setCategory] = useState("Produce");
    
        const handleSubmit = (event) => {
            event.preventDefault();
            
            console.log({ name, quantity, category });
        };            

    return (
      <div class="w-min">
          <form class="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <ul class="md:flex md:items-center mb-3">                      
            <input
              type="text"
              value={name}
              placeholder="Item name"
              onChange={onNameChange => setName(onNameChange.target.value)}
              className="text-gray-900 bg-white rounded-lg p-1 w-50"
            />
          </ul>
          <ul class="md:flex md:items-center mb-3">
            <input
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className="text-gray-900 bg-white rounded-lg p-1 w-10 mr-5"
            />
            <select value={category} className="ml-5 text-gray-900 bg-white rounded-lg p-1 w-30 " onChange={(event) => setCategory(event.target.value)} required>
            <option value="">Category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
            </select>
          </ul>
          <ul>
          <button type="submit" className="hover:bg-slate-900 bg-blue-500 text-white font-bold rounded-lg w-40 py-1 center ">+</button>
          </ul>
        </form>
      </div>
    );
  }


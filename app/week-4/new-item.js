"use client";   
import { useState } from "react";

export default function NewItem() {
        const [name, setName] = useState("Produce");
        const [quantity, setQuantity] = useState(1);
        const [category, setCategory] = useState("");
    
        const handleSubmit = (event) => {
            event.preventDefault();
            
            console.log({ name, quantity, category });
        };            

    return (
      <div class="flex items-center justify-center rounded-lg p-6 w-30 w-min bg-slate-800 gap-y-1.5">
          <form onSubmit={handleSubmit}>
          <ul>                      
            <input
              type="text"
              value={name}
              placeholder="Item name"
              onChange={onNameChange => setName(onNameChange.target.value)}
              className="text-gray-900 bg-white rounded-lg p-1 w-50"
            />
          </ul>
          <ul>
            <input
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className="text-gray-900 bg-white rounded-lg p-1 w-10"
            />
            <select value={category} className="text-gray-900 bg-white rounded-lg p-1 w-30 " onChange={(event) => setCategory(event.target.value)} required>
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
          <button type="submit" class="hover:bg-slate-800 bg-blue-500 text-white font-bold py-1 px-10 rounded w-50 center">+</button>
          </ul>
        </form>
      </div>
    );
  }


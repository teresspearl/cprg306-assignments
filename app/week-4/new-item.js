"use client";   
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({name, quantity, category});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="number" className="form-control" id="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="unit" className="form-label">Unit</label>
                <input type="text" className="form-control" id="category" value={category} onChange={(event) => setCategory(event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
}
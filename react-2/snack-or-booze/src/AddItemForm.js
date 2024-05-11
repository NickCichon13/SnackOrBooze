import React, {useState} from "react";

function AddItemForm({}) {
    const [itemName, setItemName] = useState('');
    const [itemType, setItemType] = useState('drink');

    const handleNameChange = (e) => {
        setItemName(e.target.value);
    }

    const handleTypeChange = (e) => {
        setItemType(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
    <form onSubmit={handleSubmit}>
        <lable>
                    Item Name:
                    <input type="text" value={itemName } onChange={handleNameChange} />
                    </lable>
                    <label>
                    Item Type:
                    <select value={itemType} onChange={handleTypeChange}>
                    <option value="snack">Snack</option>
                    <option value="drink">Drink</option>
                    </select>
        </label>
                <button type="submit">Add New Item!</button>
    </form>
    )
}


export default AddItemForm; 
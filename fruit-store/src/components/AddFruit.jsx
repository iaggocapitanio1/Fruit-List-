import React, {useState} from "react";


const AddFruit = () =>{
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)

    const add_Fruit = (event) => {
        event.preventDefault();
        const fruit = {
            id: new Date(),
            name,
            quantity,
        }
        alert("Add Fruit " + fruit.name)
        console.log("ADD FRUIT: " + JSON.stringify(fruit))
    }

    

    return (
    <>
        <form action="post" onSubmit={add_Fruit}>
            <input 
            type="text" 
            name={name}
             placeholder="Nome da Fruta" 
             onChange={event => setName(event.target.value)} 
             required/>
            <input 
            type="number" 
            name={quantity} 
            placeholder="Qantidade" 
            onChange={event => setQuantity(event.target.value)} 
            required/>
            <button>Add New Fruit</button>
        </form>
        
    </>
    )
};


export default AddFruit;
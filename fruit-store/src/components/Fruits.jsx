import React from "react";
import AddFruit from "./AddFruit";
import Fruit from "./Fruit";

const Fruits = () => {
    const  fruits = [
        {id: 1, name: "Apple", quantity: 5},
        {id: 2, name: "Banana", quantity: 3}
    ] 

    return (
        <>
            <h1>Fruits List</h1>
            <AddFruit/>
            {fruits.map(fruit => (
                <Fruit key={fruit.id}  fruit={fruit}/>
            ))}
        </>
    )
}

export default Fruits;
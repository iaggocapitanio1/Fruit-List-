import React from "react";

function Fruit({fruit}) {

    return (
        <div className="fruit">
            <ul>
                <li>
                    <strong> Fruit:</strong>{fruit.name}
                </li>
                <li>
                    <strong> Quantity:</strong>{fruit.quantity}
                </li>
                <li>
                    <button onClick={() => alert(fruit.id)}>Delete</button>
                </li>
            </ul>
        </div>

    )
}

export default Fruit;
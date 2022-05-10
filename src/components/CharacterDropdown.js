import React, { useState } from "react";


const CharacterDropdown = ({ choices }) => {

    const [value, setValue] = useState(choices.label);


    
    

    return (
        <select>
            {choices.map(choice => (
                <option
                value={value}
                >
                    {choice.label}
                </option>
            ))}
        </select>
    );
}
export default CharacterDropdown;
import React, { useState } from "react";


const CharacterDropdown = ({ choices }) => {

    const [value, setValue] = useState();



    

    return (
        <select>
            {choices.map(choice => (
                <option
                value={choice.label}
                >
                    {choice.label}
                </option>
            ))}
        </select>
    );
}
export default CharacterDropdown;
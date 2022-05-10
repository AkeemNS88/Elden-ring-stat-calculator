import React from "react";
import CharacterForm from "./CharacterForm";
import CharacterDropdown from "./CharacterDropdown";

const Display = ({ choices, level, setLevel }) => {
    const renderClassChoices = () => (
        choices.map((choice) => (
            <CharacterForm choice={choice} level={level} setLevel={setLevel}/>
        ))
    )
    

    return (
        <div id="character table">
            <CharacterDropdown choices={choices}/>
        </div>
    );
}


export default Display;
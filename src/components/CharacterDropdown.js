import React, { useState, useMemo } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import ListItem from "@progress/kendo-react-dropdowns/dist/npm/common/ListItem";


const CharacterDropdown = ({ choices }) => {
    // Store currently selected Category
    const [option, setOption] = useState("")
    
    // Dropdown options
    const options = ["Astrologer", "Bandit", "Confessor", 
                    "Hero", "Prisoner", "Prophet", "Samurai",
                    "Vagabond", "Warrior", "Wretch"]
    
    // Memoize results. Will re-evaluate any time selected
    const filteredChoices = useMemo(() => {
        return choices.filter(name => name.label === option)
    }, [option])
    
    

    

    return (
        <section className="k-my-8">
            <form className= "k-form k-mb-4">
                <label className="k-label k-mb-3">Character Select - </label>
                <DropDownList data={options} onChange={e => setOption(e.value)} />
            </form>
            <section className="k-listgroup">
                <ul>
                    {filteredChoices.map(name => {
                        return (
                            <p key={name.id} className="k-listgroup-item">
                                Level {name.level}
                                <p key={name.id} className="k-listgroup-item">
                                    Vigor {name.vigor}
                                    <p key={name.id} className="k-listgroup-item">
                                        Mind {name.mind}
                                        <p key={name.id} className="k-listgroup-item">
                                            Endurance {name.endurance}
                                            <p key={name.id} className="k-listgroup-item">
                                                Strength {name.strength}
                                                <p key={name.id} className="k-listgroup-item">
                                                    Dexterity {name.dexterity}
                                                    <p key={name.id} className="k-listgroup-item">
                                                        Intelligence {name.intelligence}
                                                        <p key={name.id} className="k-listgroup-item">
                                                            Faith {name.faith}
                                                            <p key={name.id} className="k-listgroup-item">
                                                                Arcane {name.arcane}
                                                            </p>
                                                        </p>
                                                    </p>
                                                </p>
                                            </p>
                                        </p>
                                    </p>
                                </p>
                            </p>
                        )
                    })}
                </ul>
            </section>
        </section>
    );
}
export default CharacterDropdown;
import React from "react"

function Stats({ choice }) {
    return (
        <div>
            Level: {choice.level}
            <div>
            Vigor:   {choice.vigor}
            </div>
        </div>
    )
}

export default Stats;
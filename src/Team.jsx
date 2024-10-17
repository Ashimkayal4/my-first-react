import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid tomato',
        borderRadius: '15px',
        padding: '10px',
        margin: '10px',
    }

    const addTeam = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const removeTeam = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    return (
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={addTeam}>Add Player</button>
            <button onClick={removeTeam}>Remove Player </button>
        </div>
    )
}
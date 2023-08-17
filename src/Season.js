import { useState } from "react";
import { tvShows } from "./data";

function Season(props) {
const { seasons } = props;

const [series, setSeries] = useState(0);
const [season, image, description] = tvShows[series];
console.log(seasons)


    return (
        <div className="container">
        <h2>{props.season}</h2>
        </div>
    )
}

export default Season;
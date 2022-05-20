import React from "react";
import { Div } from "./style";

const Card = props => {
    return (
        <Div className={props.className}>{props.children}</Div>
    )
}
export default Card;
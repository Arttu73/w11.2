import React from "react";
import MyHOC from "./MyHOC";

const Component = ({name}) => {
    return <div> My name is {name}!</div>
};

export default MyHOC(Component, 'Kalle');
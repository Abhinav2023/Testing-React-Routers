import React from "react";
import {Link} from 'react-router-dom';
const portfolio=()=>(
    <div>
        This is my portfolio site
        <Link to="/portfolio/1" exact={true}>Project 1</Link>
        <Link to="/portfolio/2" exact={true}>Project 2</Link>
    </div>
);

export default portfolio;
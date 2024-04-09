import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PortfolioMain.css';

function PortfolioMain() {
    const dispatch = useDispatch();
    const history = useHistory();
    const projects = useSelector(store => store.projectList);

return (
<main>
<div className="container">
<h1>Welcome to your new developer's portfolio!</h1>
<h5>Everett is the best coder!</h5>
</div>
</main>
);

}

export default PortfolioMain;
import React from 'react';

const MyHOC = (Component, { name }) => {

    return (
        <div className="wrapper">
            <Component name={name} />
        </div>
     );
    
};

export default MyHOC;
import React from 'react';

const MyHOC = (WrapperedComponent, { name }) => {

    return (
        <div className="wrapper">
            <WrapperedComponent name={name} />
        </div>
     );
    
};

export default MyHOC;
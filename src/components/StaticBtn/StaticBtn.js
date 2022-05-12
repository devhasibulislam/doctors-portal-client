import React from 'react';

const StaticBtn = ({children}) => {
    return (
        <div>
            <button className="btn border-0 font-bold text-white bg-gradient-to-r from-secondary to-primary px-4">{children}</button>
        </div>
    );
};

export default StaticBtn;
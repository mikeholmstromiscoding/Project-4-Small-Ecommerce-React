import React from 'react';

const NotFound = () => {

    const style = {
        marginTop: '5rem',
        fontSize: '1.5rem'
    }
    return (
        <div className="text-center">
            <p style={style}>The resource you are looking for couldn't be found.</p>
        </div>
    );
}

export default NotFound;
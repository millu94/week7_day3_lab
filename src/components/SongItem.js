import React from 'react';


const SongItem = ({song}) => {
    return(
        <>
        <li>
            <h3>{song["im:name"].label}</h3>
            <p>{song["im:artist"].label}</p>
            <p></p>
        </li>
        </>
    )
    


};

export default SongItem;


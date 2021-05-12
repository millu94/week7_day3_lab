import React from 'react';
import SongItem from './SongItem';

const ChartList = ({songs}) => {
    const songNodes = songs.map((song, index) => {
        return(
            <SongItem song={song} key={index}/>
        )
    })

    return (
        <div className="chart">
            <ol>
                {songNodes} 
                
            </ol>
        </div>

    )


}

export default ChartList;
import React from 'react'
import axios from 'axios';

function Map() {

    axios.get('http://www.celestrak.com/NORAD/elements/stations.txt').then((response)=>{
        console.log(response)
    })
    


    return (
        <div>
            
        </div>
    )
}

export default Map

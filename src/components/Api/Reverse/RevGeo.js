import React, { Component } from 'react';
import style from '../Start.module.css'

const RevGeo = () => {
    return ( 
        <div>
            <h1 className={`mt-4 ${style.api}`}>Reverse Geocode</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
                <code className={style.get}>GET</code>
                Reverse Geocoding API
            </p>
            <pre className={style.coding}>
                <code>
                    <div>
                        <span>https://barikoi.xyz/v1/api/search/reverse/API_KEY/geocode?longitude=90.3737&latitude=23.7881&district=true&post_code=true&country=true&sub_district=true&union=false&pauroshova=false&location_type=true</span>
                    </div>
                    {/* <button type="button" className="">Copy</button> */}
                </code>
            </pre>
            <p>Returns an address given longitude and latitude.</p>
            <h2 className={`mt-4 mb-3 ${style.intro}`}>API PARAMS</h2>
        </div>
     );
}
 
export default RevGeo;
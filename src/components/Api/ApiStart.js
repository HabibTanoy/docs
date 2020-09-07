import React, { Component } from 'react';
import style from '../Api/Start.module.css'

const ApiStart = (props) => {
    return ( 
        <div>
            <h1 className={`mt-4 ${style.api}`}>Barikoi Places API</h1>

            <h2 className={`mt-5 mb-3 ${style.intro}`}>Introduction</h2> 
            <p className={style.introPtag}>Welcome to Barikoi API. Thank you for checking a Bangladeshi location data provider API. Our API Helps you to find address, geocode and reverse geocode place and city corporation information in Dhaka in our local context.</p>
            <h2 className={`mt-5 mb-3 ${style.intro}`}>Overview</h2> 
            <p className={style.introPtag}>The currently listed Places API's are for autocomplete, post office autocomplete, geocoding, reverse geocoding, nearby, distance & rupantor geocoder. And City Corporation API's are Ward by Geolocation, Zone by Geolocation, Ward and Zone by Geolocation, City Corporation by Geolocation.</p>
            <h2 className={`mt-5 mb-3 ${style.intro}`}>Authentication</h2>
            <p className={style.introPtag}>API Key is needed to use all the API's. Sign up. in Barikoi to get the API KEY.</p>
            <h2 className={`mt-5 mb-3 ${style.intro}`}>Error Codes</h2>
            <strong className={style.limit}>API Limit Exceeded</strong>
            <div className="mt-3">
            <pre className={style.coding}>
                <code>
                    <div>
                    <span>{props.brek}</span>
                    </div>
                    <div>
                    <span>"message":</span>
                    </div>
                    <div>
                    <span>"API LIMIT EXCEEDED",</span>
                    </div>
                    <div>
                    <span>"status": 429</span> 
                    </div> 
                    <div>
                    <span>{props.endBrk}</span>
                    </div>
                    <button type="button" className={style.copyBtn}>Copy</button>  
                </code>
            </pre>
            </div>
        </div>
     );
}
 
export default ApiStart;
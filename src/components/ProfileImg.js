import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";


//NEEDS COFGIURIG TO PULL IN A PROFILE IMAGE FROM A MD FILE and place over a background Banner

const Profileimages = ({profileimages}) =>(
    <div>
            {profileimages.map(profileimage => (
                <image style = 'border-radius: 50%' >
                    {profileimage}
                </image>
            ))}
    </div>

)

Profileimages.PropTypes = {


    
}
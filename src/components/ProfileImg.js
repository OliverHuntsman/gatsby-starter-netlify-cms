import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

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
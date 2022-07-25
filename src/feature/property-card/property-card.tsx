import React from 'react';

import { PROPERTY } from 'common/constants';
import { Bathtub, Bed, Car } from 'common/svgIcons';

const PropertyCard: React.FC<{}> = () => {
    return (<div className='property-wrapper'>
        <h1 className='header-text'>Australia's best investment property deals</h1>
        <div className='property-filter'>
            <div>1 Bedroom</div>
            <div>2 Bedroom</div>
            <div>3 Bedroom</div>
            <div>4 Bedroom</div>
        </div>
        <div className='property-cards-wrapper'>
            {PROPERTY.map((data) =>
                <div className="property-card" key={data.id}>
                    <img src={data.img} alt="profile-img" loading='lazy' />
                    <p className='property-title'>{data.p_name}</p>
                    <p className='property-add'>{data.p_address}</p>
                    <div className='property-info-wrapper'>
                        <div className='property-info'>
                            <span><Bed className='property-icon' />{data.bedroom}</span>
                            <span><Bathtub className='property-icon' />{data.bathroom}</span>
                            <span><Car className='property-icon' />{data.parking}</span>
                        </div>
                        <div className="property-type">{data.p_tag}</div>
                    </div>
                </div>)
            }
        </div>
    </div>)
};

export default PropertyCard;

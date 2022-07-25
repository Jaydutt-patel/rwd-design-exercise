import React from 'react';

import Header from 'common/header';
import InquiryForm from 'feature/inquiry/inquiryForm';
import PropertyCard from 'feature/property-card/property-card';

const Dashboard: React.FC<{}> = () => {
    return (<div>
        <Header />
        <PropertyCard />
        <InquiryForm />
    </div>)
};

export default Dashboard;

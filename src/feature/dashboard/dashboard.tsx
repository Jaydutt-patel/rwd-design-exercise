import React from 'react';

import Header from 'common/header';
import PropertyCard from 'feature/property-card/property-card';
import InquiryForm from 'feature/inquiry/inquiryForm';

const Dashboard: React.FC<{}> = () => {
    return (<div>
        <Header />
        <PropertyCard />
        <InquiryForm />
    </div>)
};

export default Dashboard;

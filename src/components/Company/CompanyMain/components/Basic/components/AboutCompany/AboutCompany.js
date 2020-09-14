import React from 'react';
import "./AboutCompany.scss";

const AboutCompany = () => (
  <div className="about_company">
  <h3> About this company</h3>
  <div className="companyname_box">
      <div className="key_name"> Name </div>
      <div className="value_name"> HubSpot, Inc. </div>
  </div>
  <div className="company-domain-name_box">
      <div className="key_name"> Company domain name </div>
      <div className="value_name"> hubspot.com </div>
  </div>
  <div className="industry_box">
      <div className="key_name"> Industry </div>
      <div className="value_name"> Computer Software </div>
  </div>
  <div className="phone-number_box">
      <div className="key_name"> Phone number </div>
      <div className="value_name">  +1 888-482-7768 </div>
  </div>
  <div className="company-owner_box">
      <div className="key_name"> Company owner </div>
      <div className="value_name">  blank </div>
  </div>
  <div className="type_box">
      <div className="key_name"> Type </div>
      <div className="value_name">  blank </div>
  </div>
  <div className="city_box">
      <div className="key_name"> City </div>
      <div className="value_name">  Cambridge </div>
  </div>
  <div className="region_box">
      <div className="key_name"> State/Region </div>
      <div className="value_name">  MA </div>
  </div>
  <div className="postol_box">
      <div className="key_name"> Postal code </div>
      <div className="value_name">  02141 </div>
  </div>
  <div className="employee-num_box">
      <div className="key_name"> Number of employees </div>
      <div className="value_name">  5,000 </div>
  </div>
  <div className="revenue_box">
      <div className="key_name"> Annual revenue </div>
      <div className="value_name">  $250,000,000.00 </div>
  </div>
  <div className="timezone_box">
      <div className="key_name"> Time zone </div>
      <div className="value_name">  America/New_York </div>
  </div>
  <div className="description_box">
      <div className="key_name"> Description </div>
      <div className="value_name">  HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service.1 </div>
  </div>
  <div className="linkedin_box">
      <div className="key_name"> LinkedIn company page </div>
      <div className="value_name">  https://www.linkedin.com/company/hubspot </div>
  </div>
  <button className="view-all-properties">View all properties </button>
  <button className="view-property-history">View property history </button>
</div>
);

export default AboutCompany;
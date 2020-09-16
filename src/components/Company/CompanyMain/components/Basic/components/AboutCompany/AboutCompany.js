import React from 'react';
import CompanyDetail from "./components/CompanyDetail"
import "./AboutCompany.scss";

const companyInfo = [
	{ key: "Name", input: "HubSpot, Inc." },
	{ key: "Company domain name", input: "hubspot.com" },
	{ key: "Industry", input: "Computer Software" },
	{ key: "Phone number", input: "+1 888-482-7768." },
	{ key: "Company owner", input: "No owner" },
	{ key: "Type", input: " " },
	{ key: "City", input: "Cambridge" },
	{ key: "State/Region", input: "MA" },
	{ key: "Postal code", input: "02141" },
	{ key: "Number of employees", input: "5,000" },
	{ key: "Annual revenue", input: "$250,000,000.00" },
	{ key: "Time zone", input: "America/New_York" },
	{ key: "Description", input: "HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service.1" },
	{ key: "LinkedIn company page", input: "https://www.linkedin.com/company/hubspotk" }
]

const AboutCompany = () => (
	<div className="about_company">
		<h3> About this company</h3>
		{companyInfo.map((item) => (
			<CompanyDetail
				key={item.key}
				label={item.key}
				input={item.input}
			/>
		))}
	</div>
);

export default AboutCompany;
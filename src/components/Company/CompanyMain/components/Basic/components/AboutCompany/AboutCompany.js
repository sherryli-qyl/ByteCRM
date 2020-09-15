import React from 'react';
import CompanyDetail from "./components/CompanyDetail"
import "./AboutCompany.scss";

const companyInfo = [
	{ label: "Name", input: "HubSpot, Inc." },
	{ label: "Company domain name", input: "hubspot.com" },
	{ label: "Industry", input: "Computer Software" },
	{ label: "Phone number", input: "+1 888-482-7768." },
	{ label: "Company owner", input: "No owner" },
	{ label: "Type", input: " " },
	{ label: "City", input: "Cambridge" },
	{ label: "State/Region", input: "MA" },
	{ label: "Postal code", input: "02141" },
	{ label: "Number of employees", input: "5,000" },
	{ label: "Annual revenue", input: "$250,000,000.00" },
	{ label: "Time zone", input: "America/New_York" },
	{ label: "Description", input: "HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service.1" },
	{ label: "LinkedIn company page", input: "https://www.linkedin.com/company/hubspotk" }
]

const AboutCompany = () => (
	<div className="about_company">
		<h3> About this company</h3>
		{companyInfo.map((item) => (
			<CompanyDetail
				label={item.label}
				input={item.input}
			/>
		))}
	</div>
);

export default AboutCompany;
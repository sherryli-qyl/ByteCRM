import api from '../../../lib/api';

const GetCompanyByCode = (code) => {
    const response = api.get(`/api/companies/${code}`);
    return response; 
}
export {GetCompanyByCode};


async function GetCompany(companyId) {
  const serverUrl = `http://localhost:3000/api/companies/${companyId}`;
  const response = await fetch(serverUrl, {
    method: "GET",
  });
  const data = response.json();
  return data;
}

async function GetAllCompanies() {
  let url = new URL("http://localhost:3000/api/companies");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}

async function UpdateCompany(companyId, body) {
  const serverUrl = `http://localhost:3000/api/companies/${companyId}`;
  console.log(body);
  const response = await fetch(serverUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = response.json();
  return data;
}

async function GetCompanyByUserId(userId, keyword) {
  const serverUrl = `http://localhost:3000/api/companies/search/${userId}/${keyword}`;
  const response = await fetch(serverUrl, {
    method: "GET",
  });
  // .then((res)=>{
  //     if(!res.ok){
  //         throw res;
  //     }
  //     return res.json();
  // })
  // .catch(error =>{
  //     if (error.status === 404){
  //         console.log("no match data");
  //     }
  //     throw error;
  // })
  if (response.status === 404) {
    return false;
  } else if (response.ok) {
    const data = response.json();
    return data;
  }
}

export { GetCompany, UpdateCompany, GetCompanyByUserId, GetAllCompanies };
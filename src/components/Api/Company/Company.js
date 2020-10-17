import api from '../../../lib/api';

const GetCompanyByCode = (code) => {
    const response = api.get(`/api/companies/${code}`);
    return response; 
}
export {GetCompanyByCode};


async function GetCompany(code) {
  const serverUrl = `http://localhost:3000/api/companies/${code}`;
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
};

async function UpdateCompany(code, body) {
  const serverUrl = `http://localhost:3000/api/companies/${code}`;
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

async function AddCompany(body){
  const serverUrl = `http://localhost:3000/api/companies`;
  const response = await fetch(serverUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (response.ok){
    return response.json();
  }
  else {
    return false
  }
}


async function GetCompanyByUserId(code, keyword) {
  const serverUrl = `http://localhost:3000/api/companies/search/${code}/${keyword}`;
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

async function DeleteCompany(code) {
  const serverUrl = `http://localhost:3000/api/companies/${code}`;
  const response = await fetch(serverUrl, {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json'
    },
  });
  if(response.ok) {
    return true;
  } else {
    return false;
  }
}


export { GetAllCompanies, GetCompany, AddCompany, UpdateCompany, GetCompanyByUserId,  DeleteCompany };

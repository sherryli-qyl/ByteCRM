import api from '../../../lib/api';

const GetCompanyByCode = (code) => {
    const response = api.get(`/api/companies/${code}`);
    return response; 
}
export {GetCompanyByCode};

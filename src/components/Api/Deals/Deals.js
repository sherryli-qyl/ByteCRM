import api from '../../../lib/api';

const AddDealFetch = (body) => {
    const response = api.post(`/api/deals`,body);
    return response;
  };

const GetDealsById = (id)=>{
    const response = api.get(`/api/deals/${id}`);
    return response;
}

const UpdateDeal = (id,body)=>{
    const response = api.put(`/api/deals/${id}`, body);
    return response;
}

const DeleteDealsById = (id)=>{
    const response = api.delete(`/api/deals/${id}`);
    return response;
}

export { AddDealFetch, GetDealsById, UpdateDeal, DeleteDealsById };
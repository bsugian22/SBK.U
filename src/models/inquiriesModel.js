import axios from '../plugins/axios'
import { snakelize, camelize } from '../helpers/object'

class inquiriesModel
{
    async index(params) 
    {
        return camelize(await axios.get(`api/inquiries`, {
            params: snakelize(params)
        }))
    }

    async show(id) 
    {
        return camelize(await axios.get(`/api/inquiries/`+id))
    }

    async create(params) {
        return camelize(await axios.post(`/api/inquiries`, params));
    }

    async delete(params) {
        return camelize(
          await axios.delete(`/api/inquiries`, { data: params })
        );
    }

}

export default inquiriesModel
import axios from '../plugins/axios'
import { snakelize, camelize } from '../helpers/object'

class withdrawModel
{
    async index(params) 
    {
        return camelize(await axios.get(`/api/withdrawal`, {
            params: snakelize(params)
        }))
    }

    async create(data) {
        return camelize(await axios.post(`/api/withdrawal`, snakelize(data)))
    }

    async destroy(data) {
        return camelize(await axios.delete(`/api/withdrawal`, {
            data: snakelize(data)
        }))
    }
}

export default withdrawModel
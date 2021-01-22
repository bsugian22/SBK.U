import axios from '../plugins/axios'
import { snakelize, camelize } from '../helpers/object'

class exchangeModel
{
    async index(params) 
    {
        return camelize(await axios.get(`/api/exchange`, {
            params: snakelize(params)
        }))
    }

    async create(data) {
        return camelize(await axios.post(`/api/exchange`, snakelize(data)))
    }

    async destroy(data) {
        return camelize(await axios.delete(`/api/exchange`, {
            data: snakelize(data)
        }))
    }
}

export default exchangeModel
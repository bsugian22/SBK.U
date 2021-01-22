import axios from '../plugins/axios'
import { snakelize, camelize } from '../helpers/object'

class depositModel
{
    async index(params) 
    {
        return camelize(await axios.get(`/api/deposit`, {
            params: snakelize(params)
        }))
    }

    async create(data) {
        return camelize(await axios.post(`/api/deposit`, snakelize(data)))
    }

    async destroy(data) {
        return camelize(await axios.delete(`/api/deposit`, {
            data: snakelize(data)
        }))
    }
}

export default depositModel
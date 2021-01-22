import axios from '../plugins/axios'
import { snakelize, camelize } from '../helpers/object'

class noticeModel
{
    async index(params) 
    {
        return camelize(await axios.get(`/api/notices`, {
            params: snakelize(params)
        }))
    }

    async show(noticeId) {
        return camelize(await axios.post(`/api/notices/${noticeId}`))
    }
}

export default noticeModel
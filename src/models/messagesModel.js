import axios from '../plugins/axios'
import { snakelize, camelize } from '../helpers/object'

class messagesModel
{
    async index(params) 
    {
        return camelize(await axios.get(`/api/messages`, {
            params: snakelize(params)
        }))
    }

    async show(messageId) 
    {
        return camelize(await axios.get(`/api/messages/${messageId}`), {
            params: snakelize(params)
        })
    }

    async showMessage(id) 
    {
        return camelize(await axios.get(`/api/messages/`+id))
    }

    async delete(params) {
        return camelize(
          await axios.delete(`/api/messages` , { data: params })
        );
    }
}

export default messagesModel
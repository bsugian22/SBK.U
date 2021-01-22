import axios from '../plugins/axios'
import { snakelize, camelize } from '../helpers/object'

class preferencesModel
{
    async index() 
    {
        return camelize(await axios.get(`/api/preferences`))
    }
}

export default preferencesModel
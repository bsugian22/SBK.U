import axios from '../plugins/axios'
import { snakelize, camelize } from '../helpers/object'

class countriesModel
{
    async index(params) 
    {
        return camelize(await axios.get(`api/countries`, {
            params: snakelize(params)
        }))
    }

    async show(code) 
    {
        return camelize(await axios.get(`api/countries/${code}`), {
            params: snakelize(params)
        })
    }

}

export default countriesModel
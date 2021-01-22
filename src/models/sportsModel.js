import axios from '../plugins/axios'
import { snakelize, camelize } from '../helpers/object'

class sportsModel
{
    async index(params) 
    {
        return camelize(await axios.get(`/api/feed/sports`, {
            params: snakelize(params)
        }))
    }

    async show(matchId) 
    {
        return camelize(await axios.get(`/api/feed/matches/${matchId}`))
    }
}

export default sportsModel
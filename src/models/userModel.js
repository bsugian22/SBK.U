import axios from '../plugins/axios'

class userModel
{
    async index(username, password) 
    {
        const user = {
            grant_type: 'password',
            client_id: process.env.OAUTH2_USER_CLIENT_ID,
            client_secret: '',
            username: username,
            password: password,
            scope: ''
        }
        
        return axios.post('/oauth/token', user)
    }

    async me()
    {
        return axios.get('/api/users/me')
    }

    async logout()
    {
        return axios.post('/login/logout')
    }
}

export default userModel
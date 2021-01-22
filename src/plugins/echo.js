import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

const accessToken = localStorage.getItem('ACCESS_TOKEN')

const options = {
    broadcaster: 'pusher',
    app_id: process.env.ECHO_APP_ID,
    key: process.env.ECHO_APP_KEY,
    secret: process.env.ECHO_APP_SECRET,
    cluster: process.env.ECHO_APP_CLUSTER,
    forceTLS: true,
    authEndpoint: process.env.ECHO_AUTH_URL, 
    auth: {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json',
        },
    },
}

const echo = new Echo(options)

export default echo
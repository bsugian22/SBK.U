import { create } from 'axios'

const axios = create({
	withCredentials: true,
	baseURL: process.env.API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

/**
 * 요청마다 헤더에 Authorization accessToken 을 설정하여 보냅니다.
 */
axios.interceptors.request.use(config => {
	const accessToken = localStorage.getItem('ACCESS_TOKEN')

	if (accessToken) {
		config.headers['authorization'] = `Bearer ${accessToken}`
	}
	return config
})

/**
 * 응답시 헤더에 Authorization 헤더가 존재할시 토큰을 업데이트합니다.
 */
axios.interceptors.response.use(response => {
	const accessToken = response.headers['authorization']

	if (accessToken) {
		localStorage.setItem('ACCESS_TOKEN', accessToken)
	}

	return response
	}, 
	async (error) => {
		if (error.response.status == 401) {
			localStorage.setItem('ACCESS_TOKEN', '')
		}

	return Promise.reject(error)
})

export default axios
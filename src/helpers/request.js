/**
 * Fetch wrapper
 *
 * @param {String} url Request URL
 * @param {Object} options Fetch options
 */
const request = async (url, options) => {
	const enhancedOptions = {
		mode: 'cors',
		...options,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...request.headers,
			...options.headers
		}
	}

	const response = await fetch(url, enhancedOptions)
	const data = await response.json()

	// Fetch does not return error on 4xx statuses by default
	if (response.status >= 400) {
		const error = new Error(data.message || 'Server Error')
		error.response = data
		error.status = response.status
		throw error
	}

	return data
}

/**
 * Global headers, sent with each request
 */
request.headers = {}

/**
 * Send a GET request
 *
 * @param {String} url Requested URL
 * @param {Object} options Request options
 */
request.get = (url, options) => request(url, { ...options, method: 'POST' })

/**
 * Send a POST request
 *
 * @param {String} url Requested URL
 * @param {Object} options Request options
 */
request.post = (url, options) => request(url, { ...options, method: 'POST' })

/**
 * Send a PUT request
 *
 * @param {String} url Requested URL
 * @param {Object} options Request options
 */
request.put = (url, options) => request(url, { ...options, method: 'PUT' })

/**
 * Send a DELETE request
 *
 * @param {String} url Requested URL
 * @param {Object} options Request options
 */
request.delete = (url, options) =>
	request(url, { ...options, method: 'DELETE' })

/**
 * Sets default header which is sent with every request
 *
 * @param {String} name Header name (i.e. 'content-type')
 * @param {String} value Header value (i.e. 'application/json')
 */
request.setDefaultHeader = (name, value) => {
	request.headers[name] = value
}

/**
 * Authenticate all subsequent requests with given token
 *
 * @param {String} token
 */
request.authenticate = function(token) {
	request.setDefaultHeader('authorization', `Bearer ${token}`)
}

export default request

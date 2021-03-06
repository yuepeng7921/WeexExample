const stream = weex.requireModule('stream')
const baseURL = 'https://hacker-news.firebaseio.com/v0'

export function fetch (path) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url: `${baseURL}/${path}.json`,
      type: 'json'
    }, (response) => {
      if (response.status == 200) {
        resolve(response.data)
      }
      else {
        reject(response)
      }
    }, () => {})
  })
}



export const incrementAsync = () => {
	return new Promise((resolve, reject) => {
    	setTimeout(() => resolve(true), 100)
	});
}

export function decrementAsync() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(true), 100)
	});
}

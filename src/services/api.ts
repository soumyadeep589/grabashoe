import axios from 'axios'

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const fetchProductsByCategory = async (category: string) => {
  try {
    const response = await apiClient.get(`products/category/${category}`)
    return response.data.products
  } catch (error) {
    console.error('Failed to fetch products', error)
    throw error
  }
}

export default apiClient

// import axios from "axios";
// import { apiUrl } from "../env";
import shuffleArray from "../hooks/useArrayShuffle";
import axiosInstance from "../hooks/axiosInstance";

// const user = JSON.parse(localStorage.getItem("userObject"));

const fetchProducts = async(page) => {
    const response = await axiosInstance.post(`/products?page=${page}`)
    
    shuffleArray.fisherYatesShuffle(response.data.data.data, response.data.data.length)
    return response.data.data
}

const fetchSingleProduct = async(id) => {
    const response = await axiosInstance.get(`/products/single/${id}`)

    return response.data.data
}

const searchProducts = async(payload) => {
    const response = await axiosInstance.post(`/products/search`, payload)
    
    shuffleArray.fisherYatesShuffle(response.data.data, response.data.data.length)
    return response.data.data
}

const fetchSimilarProducts = async(payload) => {
    const response = await axiosInstance.get(`/products/similar/${payload}`)
    
    shuffleArray.fisherYatesShuffle(response.data.data, response.data.data.length)
    return response.data.data
}

const fetchTrendingProducts = async() => {
    const response = await axiosInstance.get(`/products/trending`)
    
    shuffleArray.fisherYatesShuffle(response.data.data, response.data.data.length)
    return response.data.data
}

// const fetchUserSaveRecord = async(product_id) => {
//     const response = await axiosInstance.get(`${apiUrl}/products/saved/${product_id}`)
    
//     return response.data.data
// }

// const saveItem = async(id, payload) => {
//     const response = await axiosInstance.post(`${apiUrl}/products/save/${id}`, payload)

//     return response.data
// }

// const fetchRecentlyViewedItems = async() => {
//     const response = await axiosInstance.get(`${apiUrl}/products/recently_viewed`)
    
//     return response.data
// }

// const saveItemToRecent = async(id) => {
//     const response = await axiosInstance.post(`${apiUrl}/products/recently_viewed/${id}`)

//     return response.data
// }

// const fetchAllSavedItems = async() => {
//     const response = await axiosInstance.get(`${apiUrl}/products/saved/all`)

//     return response.data
// }

// const fetchProductReviews = async(product_id) => {
//     const response = await axiosInstance.get(`${apiUrl}/products/reviews/${product_id}`)

//     return response.data
// }

const productService = {
    fetchProducts,
    fetchSingleProduct,
    fetchSimilarProducts,
    // saveItem,
    // fetchUserSaveRecord,
    // fetchRecentlyViewedItems,
    // saveItemToRecent,
    // fetchAllSavedItems,
    // fetchProductReviews,
    fetchTrendingProducts,
    searchProducts
}

export default productService
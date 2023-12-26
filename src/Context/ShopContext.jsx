import { createContext, useReducer } from "react";
// import all_products from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

export const shopReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { isLoading: true}
        case 'IS_SUCCESS':
            return { ...state, products: action.payload, isLoading: false}
        case 'SINGLE_PRODUCT_SUCCESS':
            return { ...state, product: action.payload, isLoading: false}
        case 'SIMILAR_PRODUCT_SUCCESS':
            return { ...state, similarProducts: action.payload, isLoading: false}
        case 'TRENDING_PRODUCT_SUCCESS':
            return { ...state, trendingProducts: action.payload, isLoading: false}
        case 'FILTER_PRODUCT_SUCCESS':
            return { ...state, filteredProducts: action.payload, isLoading: false}
        default: 
            return state
    }
}

const ShopContextProvider = ({children}) => {

    // const contextValue = {all_products}
    const [state, dispatch] = useReducer(shopReducer, {
        products: null,
        isLoading: false,
        product: null,
        similarProducts: null,
        filteredProducts: null,
        trendingProducts: null,
    })

    return (
        <ShopContext.Provider value={{...state, dispatch}}>
            {children}
        </ShopContext.Provider>
    )
}  

export default ShopContextProvider
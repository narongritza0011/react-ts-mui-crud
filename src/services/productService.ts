import axios from 'axios';
import { Product } from '../models/Product';

const API_BASE_URL = 'http://localhost:3000'; // Replace this with your API base URL

export const getAllProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(`${API_BASE_URL}/products`);
    return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
    const response = await axios.get<Product>(`${API_BASE_URL}/products/${id}`);
    return response.data;
};

export const createProduct = async (product: Product): Promise<Product> => {
    const response = await axios.post<Product>(`${API_BASE_URL}/products`, product);
    return response.data;
};



export const updateProduct = async (product: Product): Promise<Product> => {
    const response = await axios.put<Product>(`${API_BASE_URL}/products/${product.id}`, product);
    return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/products/${id}`);
};
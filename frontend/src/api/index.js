import axios from "axios";

const baseURL = "http://localhost:4000/api/v1";
const API = axios.create({ baseURL });

/* @ACTIVATION-API */
export const activation = (id) =>
  API.post("/auth/activation", { activation_token: id });
export const userByAccessToken = (access_token) =>
  API.get("/user/info", {
    headers: { Authorization: `Bearer ${access_token}` },
  });

/* @SIGNUP-API */
export const signup = (formData) => API.post("/register", formData);
export const googleLogin = (token) => API.post("/auth/google_login", { tokenid: token });

/* @SIGNIN-API */
export const signIn = (formData) => API.post("/login", formData);

/* @PRODUCT-CATEGORY-API */
export const fetchProductsByCategory = () => API.get("/pet/data");

/* @GET-SINGLE-PRODUCT */
export const fetchSingleProduct = (id) => API.get(`/pets/one/${id}`);

/* @CART-API */
export const addToCart = (id) => API.get("/");

/* @SELLERS-API */
export const fetchSellers = () => API.get("/seller");

/* @CATEGORIES-API */
export const fetchCategories = () => API.get("/category");

/* @FORGOT PASSWORD-API */
export const forgotPassword = (email) => API.post("/auth/forgot", { email });
export const confirmPassword = (token, password) =>
  API.post("/auth/reset", { access_token: token, password: password });

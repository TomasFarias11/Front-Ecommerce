import axios from "axios";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_CATEGORY = "GET_CATEGORY"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const ADD_CATEGORY = "ADD_CATEGORY"
export const EDIT_CATEGORY = "EDIT_CATEGORY"
export const DELETE_CATEGORY = "DELETE_CATEGORY"
export const GET_CATEGORY_ID = "GET_CATEGORY_ID"


export const GET_USERS = "GET_USERS"
export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"
export const EDIT_USER_BANE = "EDIT_USER_BANE"



export function deleteProduct (id) {
    return async(dispatch)=>{
        try {
            await axios.delete(`/admin/delete/${id}`);
            let product=await axios.get("/products");
            return dispatch({
                type: DELETE_PRODUCT, 
                payload: product.data,
            })      

        } catch (err) {
            console.log(err)
        }
    }
}


export function getCategory () {
    return async(dispatch)=>{
        try {
            let allCategory=await axios.get("/category");
              return dispatch({
                type: GET_CATEGORY,
                payload: allCategory.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}


export function addProduct(body){
    return async (dispatch)=>{
        try {
            await axios.post('/admin/create', body);
            let product = await axios.get("/products")
            return dispatch({
                type: ADD_PRODUCT,
                payload: product.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}


export function editProduct(id, body){
    return async (dispatch)=>{
        try {
            await axios.put(`/admin/edit/${id}`, body);
            let product = await axios.get("/products")
            return dispatch({
                type: EDIT_PRODUCT,
                payload: product.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function addCategory(body){
    return async (dispatch)=>{
        try {
            await axios.post("/category/create", body);
            let allCategory=await axios.get("/category");
              return dispatch({
                type: ADD_CATEGORY,
                payload: allCategory.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function editCategory(id, body){
    return async (dispatch)=>{
        try {
            await axios.put(`/category/edit/${id}`, body);
            let allCategory=await axios.get("/category");
            return dispatch({
                type: EDIT_CATEGORY,
                payload: allCategory.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function deleteCategory (name) {
    return async(dispatch)=>{
        try {
            await axios.delete(`/category/delete/?name=${name}`);
            let allCategory=await axios.get("/category");
            return dispatch({
                type: DELETE_CATEGORY,
                payload: allCategory.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function getCategoryById (id) {
    return async function (dispatch) {
        try {

            let category = await axios.get(`/category/${id}`)
            return dispatch({
                type: "GET_CATEGORY_ID",
                payload: category.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function getUsers(){
    return async function (dispatch) {
        try {
            const allUsers=await axios.get("/user");
            return dispatch({
                type: GET_USERS,
                payload: allUsers.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function deleteUser(id){
    return async (dispatch)=>{
        try {
                           await axios.delete(`/admin/user/delete/${id}`);
            const allUsers=await axios.get("/user");
            return dispatch({
                type: DELETE_USER,
                payload: allUsers.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function editUser(id, admin){
    console.log('ADMIN',admin)
    const a = {admin:admin}
    return async (dispatch)=>{
        try {
                           await axios.put(`/admin/user/edit/${id}`,a);
            const allUsers=await axios.get("/user");
            return dispatch({
                type: EDIT_USER,
                payload: allUsers.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function editUserbane(id, body){
    return async (dispatch)=>{
        try {
            await axios.put(`/admin/user/editbane/${id}`,body);
            const allUsers=await axios.get("/user");
            return dispatch({
                type: EDIT_USER_BANE,
                payload: allUsers.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}
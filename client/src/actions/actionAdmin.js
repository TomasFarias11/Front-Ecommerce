import axios from "axios";

export const DELETE_PRODUCT = "DELETE_PRODUCT";


export function deleteProduct (id) {
    return async(dispatch)=>{
        try {
            console.log("id que llega al action", id)
            let removeProduct=await axios.delete("http://localhost:3001/admin/delete", id);
            console.log(removeProduct.data)
            

        } catch (err) {
            console.log(err)
        }
    }
}
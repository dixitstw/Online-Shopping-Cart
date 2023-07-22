import Swal from "sweetalert2"

const initialData = {
    cart_items: []
}

const cartReducer = (state= initialData, action) =>{

    switch(action.type){
        case"ADD_TO_CART":
        Swal.fire({
            title: 'Congrats',
            html: 'Your item has been added to cart', 
            icon: 'success',
            timer: 1000,
            position: "top-right",
            showConfirmButton: "false"
        })
        return{cart_items: [...state.cart_items, action.payload]}

        case"REMOVE FROM CART":
        Swal.fire({
            title: "Removed",
            html: "Item removed from cart",
            icon: "warning",
            timer: 1000,
            positon: "top-right",
            showConfrimButton: "false"
           })
        return {cart_items: state.cart_items.filter(item=>item.id!=action.payload)}

        default:
            return state
    }
    return state
}

export default cartReducer
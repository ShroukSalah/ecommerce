import { reactive } from 'vue'
// import { GetProducts } from "../../services/products/service"
const state = reactive({
    products: [],
})

export default function () {
    const getProducts = () => {
        console.log("print")
    }
    return {
        state,
        getProducts
    }

}

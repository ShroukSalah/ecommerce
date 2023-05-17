import { reactive } from 'vue'
// import { GetProducts } from "../../services/products/service"
const state = reactive({
    products: [],
})

export default function () {
  
    return {
        state,
         
    }

}

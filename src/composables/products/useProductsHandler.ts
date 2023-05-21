import { reactive, ref } from 'vue'
import { GetProducts } from "../../services/products/service";
const state = reactive({
    products: [],
    page: ref(0),
    numberOfPages: ref(0),
})

export default function () {
    const handlePageChange = (page: any) => {
        state.page = page;
    }
    const getpagination = async () => {
        try {
            const { data } = await GetProducts();
            state.page = data.paginationResult.page
             state.numberOfPages = data.paginationResult.numberOfPages
            console.log(data.paginationResult.numberOfPages)
        } catch (error) {
            console.log(error);
        }
    }
    return {
        state,
        handlePageChange,
        getpagination
    }

}

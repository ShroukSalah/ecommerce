import { reactive } from 'vue'

const state = reactive({
    registerActive: false,
})

export default function () {

    return {
        state,
    }

}

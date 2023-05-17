import { reactive } from 'vue'
import { loginuser } from "../../services/auth/service";

const state = reactive({
    registerActive: false,
    username: "",
    password: "",
})
interface Payload {
    username: string | null,
    password: string | null,
}

export default function () {
    const login = async () => {

        const loginPayload = (): Payload => {
            const payload: Payload = {
                username: state.username,
                password: state.password
            }
            return payload
        }


        // if (state.username != "" || state.password != "") {
            try {
                 // @ts-ignore
                const { data } = await loginuser(loginPayload());
                console.log(data.data)
      
            } catch (error) {
                console.log(error);
            }
         // } else {
        //     console.log("Username and Password can not be empty")
        // }
    }
    return {
        state,
        login
    }

}

import { reactive } from 'vue'
import { loginuser, signupuser } from "../../services/auth/service";

const state = reactive({
    registerActive: false,
    username: "",
    password: "",
    name: "",
    email: "",
    username2:""
})

interface Login {
    username: string | null,
    password: string | null,
}

interface SignUp {
    name: string | null,
    username: string | null,
    email: string | null,
    password: string | null,
}
export default function () {
    const login = async () => {

        const loginPayload = (): Login => {
            const payload: Login = {
                username: state.username,
                password: state.password
            }
            return payload
        }


        if (state.username != "" || state.password != "") {
            try {
                const { data } = await loginuser(loginPayload());
                console.log(data.user)
                console.log(data.errors.msg)
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Username and Password can not be empty")
        }
    }
    const signup = async () => {
        const signupPayload = (): SignUp => {
            const payload: SignUp = {
                name: state.name,
                username: state.username,
                email: state.email,
                password: state.password
            }
            return payload
        }

        try {

            const { data } = await signupuser(signupPayload());
            console.log(data.data)

        } catch (error) {
            console.log(error);
        }
    }
    return {
        state,
        login,
        signup
    }

}

<template>
    <div class="q-pa-md tw-mx-auto" style="max-width: 400px">
        <!-- <div>
            <h3>
                Don't have an account?
            </h3>
            <router-link >
                Sign up
            </router-link>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <q-input filled v-model="name" label="Your name *" hint="Name and surname" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Please type something']" />

                <q-input filled type="number" v-model="age" label="Your age *" lazy-rules :rules="[
                    val => val !== null && val !== '' || 'Please type your age',
                    val => val > 0 && val < 100 || 'Please type a real age'
                ]" />

                <q-toggle v-model="accept" label="I accept the license and terms" />

                <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </q-form>
        </div> -->
        <div class="login-page">
            <transition name="fade">
                <div v-if="!registerActive" class="wallpaper-login"></div>
            </transition>
            <div class="wallpaper-register"></div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                        <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                            <h1>Sign In</h1>
                            <form class="form-group">
                                <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                                <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password"
                                    required>
                                <input type="submit" class="btn btn-primary" @click="doLogin">
                                <p>Don't have an account? <a href="#"
                                        @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
                                </p>
                                <p><a href="#">Forgot your password?</a></p>
                            </form>
                        </div>

                        <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                            <h1>Sign Up</h1>
                            <form class="form-group">
                                <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                                <input v-model="passwordReg" type="password" class="form-control" placeholder="Password"
                                    required>
                                <input v-model="confirmReg" type="password" class="form-control"
                                    placeholder="Confirm Password" required>
                                <input type="submit" class="btn btn-primary" @click="doRegister">
                                <p>Already have an account? <a href="#"
                                        @click="state.registerActive = !state.registerActive, emptyFields = false">Sign in here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script setup>
import useAuthHandler from "../composables/auth/useAuthHandler";

const {
    state
} = useAuthHandler();

</script>

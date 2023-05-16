<template>
    <div class=" tw-mx-auto">
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


        <div class="container">
            <div class="tw-grid lg:tw-grid-cols-2  tw-gap-4">
                <div class=" tw-col-span-2 tw-my-10 tw-mx-auto">
                    <div v-if="!state.registerActive" class="card login">
                        <h1>Sign In</h1>
                        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                            <q-input filled v-model="name" label="Your name *" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />
                            <q-input filled v-model="name" label="Your name *" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />
                            <q-btn label="Submit" type="submit" color="primary" />
                            <p>Don't have an account? <a href="#"
                                    @click="state.registerActive = !state.registerActive, emptyFields = false">Sign up
                                    here</a>
                            </p>
                            <p><a href="#">Forgot your password?</a></p>
                        </q-form>
                    </div>

                    <div v-else class="card register">
                        <h1>Sign Up</h1>
                        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                            <q-input filled v-model="name" label="Your name *" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />
                            <q-input filled v-model="name" label="Your name *" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />
                            <q-input filled v-model="name" label="Your name *" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />
                            <q-btn label="Submit" type="submit" color="primary" />
                            <p>Already have an account?
                                <a href="#" @click="state.registerActive = !state.registerActive, emptyFields = false">
                                    Sign in here
                                </a>

                            </p>
                        </q-form>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
<script setup >
import useAuthHandler from "../composables/auth/useAuthHandler";

const {
    state
} = useAuthHandler();

</script>

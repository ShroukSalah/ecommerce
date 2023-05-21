<template>
    <div class=" tw-mx-auto">
        <div class="container">
            <div class="tw-grid lg:tw-grid-cols-1  tw-gap-4">
                <div class=" tw-col-span-5 tw-my-10 tw-mx-auto">
                    <!-- login form -->
                    <div v-if="!state.registerActive" class="card login">
                        <h1>Sign In</h1>
                        <q-form method="post" class="q-gutter-md">
                            <q-input filled v-model="state.username" label="Username" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />

                            <q-input filled v-model="state.password" label="Password" hint="Your Pass" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />

                            <q-btn label="Submit" type="submit" color="primary" @click.prevent="login" />

                            <p>Don't have an account?
                                <a href="#" @click="state.registerActive = !state.registerActive, emptyFields = false">
                                    Signup here
                                </a>
                            </p>

                            <p>
                                <!-- <a href="#">Forgot your password?</a> -->
                            </p>
                        </q-form>
                    </div>
                    <!-- signup form -->
                    <div v-else class="card register">
                        <h1>Sign Up</h1>
                        <q-form class="q-gutter-md" method="post">
                            <q-input filled v-model="state.name" label="Your name *" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />

                            <q-input filled v-model="state.username" label="username" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />

                            <q-input filled v-model="state.email" label="email" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />

                            <q-input filled v-model="state.password" label="password" hint="Name and surname" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />

                            <q-btn label="Submit" type="submit" color="primary" @click.prevent="signup" />

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
    state,
    login,
    signup
} = useAuthHandler();


</script>

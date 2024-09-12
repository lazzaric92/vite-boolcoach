<script>
import axios from 'axios';

export default {
    data() {
        return {

        }
    },
    components: {

    }
}
</script>

<template>
<body class="d-flex align-items-center">
    <div class="col-6 mx-auto text-white">
        <form>
            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="email" class="form-control" />
                <label class="form-label" for="email">Email address</label>
            </div>
    
            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="password" class="form-control" />
                <label class="form-label" for="password">Password</label>
            </div>
    
    
        <!-- Submit button -->
            <button  type="button" class="btn btn-primary btn-block mb-4">Login</button>
        </form>
    </div>
    
</body>
</template>

<style scoped lang="scss">
body {
    height: calc(100vh - 64px);
}
</style>
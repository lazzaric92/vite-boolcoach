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
<body class="d-flex">
    <div class="col-6 mx-auto text-white">
        <form>
            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">Email address</label>
            </div>
    
            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Password</label>
            </div>
    
    
        <!-- Submit button -->
            <button  type="button" class="btn btn-primary btn-block mb-4">Login</button>
        </form>
    </div>
    
</body>
</template>

<style scoped lang="scss">
body {
    height: 100%;
}
</style>
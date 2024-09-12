<script>
export default{
    data(){
        return {
            
        }
    },
    props: {
        singleCoach: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
        <div class="card p-3 mb-2">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                    <div class="ms-2 c-details">
                        <h6 class="mb-0">{{ singleCoach.nickname }}</h6> <span>{{ singleCoach.price }}&euro;</span>
                    </div>
                </div>
                <div class="badge"> <span>Design</span> </div>
            </div>
            <div class="mt-5">
                <h5 class="heading">{{ singleCoach.email }}</h5>
                <div class="mt-5">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="mt-3"> <span class="text1">{{ singleCoach.vote_average }}<span class="text2"> of 5 max</span></span> </div>
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
    body {
    background-color: #eee
}

.card {
    border: none;
    border-radius: 10px
}

.c-details span {
    font-weight: 300;
    font-size: 13px
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 39px
}

.badge span {
    background-color: #fffbec;
    width: 60px;
    height: 25px;
    padding-bottom: 3px;
    border-radius: 5px;
    display: flex;
    color: #fed85d;
    justify-content: center;
    align-items: center
}

.progress {
    height: 10px;
    border-radius: 10px
}

.progress div {
    background-color: red
}

.text1 {
    font-size: 14px;
    font-weight: 600
}

.text2 {
    color: #a5aec0
}
</style>
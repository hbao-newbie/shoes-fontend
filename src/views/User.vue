<template>
    <div class="container container-custom">
        <h2 v-if="currentUser" class="user-custom bg-light"> {{ currentUser.username }} </h2>
        <div 
            v-if="currentUser"
            class="card card-custom" style="max-width: 18rem;"
        >
            <div class="card-header header-custom"> Thông tin người dùng</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: {{ currentUser.email }}</li>
            </ul>
        </div>
        <div>
            <button
                class="btn btn-primary"
                @click="gotoAddProduct"
            >Thêm sản phẩm
            </button>
            <button
                class="btn btn-primary ml-2"
                @click="gotoEditProduct"
            >Chỉnh sửa sản phẩm
            </button>
        </div>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth.store";

export default {
    computed: {
        ...mapState(useAuthStore,{
            currentUser: "user",
        }),
    },
    methods: {
        gotoAddProduct(){
            this.$router.push({ name: "AddProduct"});
        },
        gotoEditProduct(){
            this.$router.push({ name: "EditProduct"});
        },
    },
    created() {
        if (!this.currentUser) {
            this.$router.push({ name: "Login"});
        }
    },
}
</script>

<style scoped>
    div{
        margin-top: 100px;
        text-align: center;
    }

    .header-custom {
        margin-top: 0;
    }

    .card-custom {
        margin-top: 10px;
    }

    .user-custom {
        padding: 0;
        font-size: 40px;
        height: 50px;
        text-align: center;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 3px;
    }

    .container-custom {
        margin-top: 10px;
    }

    div[data-v-e0b47cf6] {
        text-align: justify;
    }

</style>
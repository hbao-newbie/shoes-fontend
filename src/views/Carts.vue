<template>
    <div v-if="!cartCost">
        <h1>Giỏ hàng rỗng</h1>
    </div>
    <div class="container" v-if="cartCost">
        <h1 v-if="cartList">Giỏ hàng của {{ currentUser.username }}</h1>
        <div
            v-for="cartItem in cartList"
        >
            <div class="d-flex">
                <div class="p-2">
                    <img :src="`/products/${cartItem.image}.jpg`" style="width: 10rem;">
                </div>
                <div class="p-2 flex-shrink-1">
                    <h5>{{ cartItem.name }}</h5>
                    <p>Giá {{ cartItem.cost }} VND</p>
                </div>
            </div>
        </div>
        <Form
            :validation-schema="cartFormSchema"
        >
            <div class="form-group">
                <label for="phone">Nhập số điện thoại của bạn</label>
                <Field
                    name="phone"
                    type="text"
                    class="form-control"
                    v-model="phone"
                />
                <ErrorMessage name="phone" class="error-feedback"/>
            </div>
            <div class="form-group">
                <label for="address">Nhập địa chỉ giao hàng</label>
                <Field
                    name="address"
                    type="text"
                    class="form-control"
                    v-model="address"
                />
                <ErrorMessage name="address" class="error-feedback"/>
            </div>
        </Form>
        <h3>Tổng thu {{ cartCost }} VND</h3>
        <button
            class="btn btn-success"
            @click="submitCart"
        > Xác nhận đơn </button>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth.store";
import { useCartStore } from "../stores/cart.store";
import { Form, Field, ErrorMessage } from "vee-validate";
import cartService from "../services/cart.service";
import * as yup from "yup";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const cartFormSchema = yup.object().shape({
            phone: yup
                .string()
                .required("Hãy nhập số điện thoại"),
            address: yup
                .string()
                .required("Hãy nhập địa chỉ giao hàng")
                .min(12, "Địa chỉ không được dưới 12 ký tự"),
        })

        return {
            data: {
                cartItem: [],
                cartPhone: "",
                cartAddress: "",
                cartCost: 0,
                status: false,
            },
            phone: '',
            address: '',
            cartFormSchema,
        }
    },
    computed: {
        ...mapState(useCartStore, {
            cartList: "carts",
            cartCost: "cost",
        }),
        ...mapState(useAuthStore, {
            currentUser: "user",
        }),
    },
    methods: {
        submitCart() {
            this.data.cartCost = this.cartCost;
            this.data.cartItem = this.cartList;
            this.data.cartPhone = this.phone;
            this.data.cartAddress = this.address
            cartService.create(this.data);
            this.$router.push({ name: 'Product'});
        }
    },

}
</script>

<style scoped>
    @import "../assets/form.css";
    h1{
        margin-top: 10px;
        text-align: center;
    }
</style>
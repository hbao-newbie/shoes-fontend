<template>
    <div class="dropdown container">
        <button class="btn btn-primary cart-custom" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
        >
            <i class="fa-solid fa-cart-shopping"></i>
            Giỏ hàng {{ countProductCart }}
        </button>
        <div class="offcanvas offcanvas-start offcanvas-custom" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Giỏ hàng</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body"
                v-if="!countProductCart"
                style="font-size: 30px;"
            >
            <i class="fa-regular fa-face-kiss-wink-heart"></i>
            Hãy chọn những mặc hàng bạn yêu thích!</div>
            <div class="offcanvas-body">
                <div 
                    v-for="(cartItem, index) in cartList"
                >
                    <div class="d-flex">
                        <div class="p-2">
                            <img :src="`/products/${cartItem.image}.jpg`" style="width: 7rem;">
                        </div>
                        <div class="p-2 flex-shrink-1">
                            <h5>{{ cartItem.name }}</h5>
                            <p>Giá {{ cartItem.cost }} VND</p>
                            <button class="btn btn-danger"
                                @click="removeItemCart(index)"
                            >Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bottom-cart"
                v-if="countProductCart"
            >
                <Form
                    @submit="submitCart"
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
                    <p class="mr-1">Tổng hóa đơn: {{ cost }} VND</p>
                    <button
                        class="btn btn-success"
                    > Xác nhận đơn </button>
                    <button
                        class="btn btn-danger margin-left"
                        @click="removeAllCart"
                    > Xóa</button>
                </Form>
                
            </div>
        </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center container">
        <div
            v-for="(product, index) in products"
            :key="product.id"
            class="p-2" style="width: 16rem;"
        >
            <div class="card">
                <img :src="`/products/${product.image}.jpg`" style="width: 15rem;" class="card-img-top">
                <div class="card-body" style="height: 220px;">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Mã sản phẩm {{ product.code }}</li>
                    <li class="list-group-item">Giá {{ product.cost }} VND</li>
                </ul>
                <div class="card-body">
                    <button class="btn btn-primary"
                        v-if="product.status"
                        @click="addProductToCart(index)"
                    >Thêm vào giỏ hàng</button>
                    <button class="btn btn-danger"
                        v-if="!product.status"
                    >
                        <i class="fa-regular fa-face-sad-cry"></i>
                        Hết hàng 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { swtoast } from "@/mixins/swal.mixin";
import { mapActions } from "pinia";
import { Form, Field, ErrorMessage } from "vee-validate";
import cartService from "../services/cart.service";
import * as yup from "yup";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    props: {
        products: { type: Array, default: [] },
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
            data: {},
            cartList: [],
            cost: 0,
            phone: "",
            address: "",
            cartFormSchema,
        }
    },
    computed: {
        countProductCart() {
            return this.cartList.length;
        },
    },
    methods: {
        addProductToCart(index) {
            this.cartList.push(this.products[index]);
            this.cost += Number.parseInt(this.products[index].cost);
            swtoast.success({
					text: "Thêm sản phẩm thành công.",
			});
        },
        removeItemCart(index) {
            this.cost -= Number.parseInt(this.products[index].cost);
            this.cartList.splice(index, 1);
        },
        removeAllCart() {
            this.cost = 0;
            this.cartList = [];
        },
        submitCart() {
            try {
                this.data.cartItem = this.cartList;
                this.data.cartCost = this.cost;
                this.data.cartPhone = this.phone;
                this.data.cartAddress = this.address;
                cartService.create(this.data);
                this.$router.push({ name: "User" });
            } catch (error) {
                console.log(error)
            }
            
        }
    },
};
</script>

<style scoped>
    
    .dropdown-menu-custom{
        margin-top: 10px;
    }
    .bottom-cart{
        padding: 20px;
    }
    .margin{
        margin-right: 10px;
    }
    .product{
        color: blue;
    }
    .product-none{
        color: red;
    }
    .cart-custom{
        margin-left: 15px;
    }

    .offcanvas-custom {
        width: 600px;
    }

    .error-feedback{
        color: red;
    }

    .margin-left{
        margin-left: 10px;
    }
</style>
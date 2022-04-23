<template>
    <div class="container container-custom">
        <div class="row d-flex justify-content-center">
            <div class="col-md-7">
                <div class="card p-3 py-4">
                    <div class="text-center"> <img src="/products/img1.jpg" width="100" class="rounded-circle"> </div>
                    <div class="text-center mt-3"> <span class="bg-secondary p-1 px-4 rounded text-white">{{ currentUser.username }}</span>
                        <h5 class="mt-2 mb-0">{{currentUser.email}}</h5>
                </div>
            </div>
        </div>
    </div>
        <div v-if="currentUser">
            <div 
                class="admin-function mt-2"
                v-if="adminUser"
            >
                <h2> Danh sách các sản phẩm </h2>
                <SearchProductVue
                    class="mt-2"
                    v-model="searchText"
                />
                <ProductListVue
                    class="mt-2"
                    v-if="productCount > 0"
                    :products="filteredProducts"
                />
                <button
                    class="btn btn-primary mt-2"
                    @click="gotoAddProduct"
                >Thêm sản phẩm
                </button>
            </div>
            <div
                class="admin-function mt-2"
                v-if="!adminUser"
            >
                <h2> Danh sách các đơn hàng của bạn</h2>          
                <div
                    v-for="(cartItemList, index) in cartList"
                    :key="cartList.id"
                > 
                    <h3> Đơn hàng {{index + 1}}</h3>
                    <div
                        class="d-flex"
                        v-for="cart in cartItemList.cartItem" :key="cart.id"
                    >
                        <div class="p-2">
                            <img :src="`/products/${cart.image}.jpg`" style="width: 5rem;">
                        </div>
                        <div class="p-2 flex-shrink-1">
                            <h5>{{ cart.name }}</h5>
                            <p>Giá {{ cart.cost }} VND</p>
                        </div>
                    </div>
                    <p>Đại chỉ giao hàng: {{ cartItemList.cartAddress}} </p>
                    <p>Số điện thoại nhận hàng: {{ cartItemList.cartPhone }}</p>
                    <p>Tình trạng: <i>Đang giao</i></p>
                    <h5>Tổng đơn {{ cartItemList.cartCost }} VND</h5>
                    <button class="btn btn-danger margin-bottom"
                        @click="deleteCart(cartItemList._id)"
                    >
                    Hủy đơn
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { swtoast, swalert } from "@/mixins/swal.mixin";
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth.store";
import ProductListVue from "../components/ProductList.vue";
import SearchProductVue from "../components/SearchProduct.vue";
import productService from "../services/product.service";
import cartService from "../services/cart.service";

export default {
    components: {
    ProductListVue,
    SearchProductVue,
    },
    data() {
        return {
            products: [],
            cartList: [],
            searchText: "",
        }
    },
    computed: {
        ...mapState(useAuthStore,{
            currentUser: "user",
        }),
        productStrings() {
            return this.products.map((product) => {
                const { name, code } = product;
                return [ name, code ].join("");
            });
        },
        // Trả về các đối tượng products cần tìm kiếm
        filteredProducts() {
            if (!this.searchText) return this.products;
            return this.products.filter(
                (product, index) => this.productStrings[index].includes(this.searchText)
            );
        },
        productCount(){
            return this.filteredProducts.length;
        },
        adminUser() {
            if(this.currentUser.username === "admin") return true;
            return false;
        }
    },
    methods: {
        gotoAddProduct(){
            this.$router.push({ name: "AddProduct"});
        },
        async retriveProduct(){
            try {
                this.products = await productService.getAll();
            } catch(err) {
                console.log(err);
            }   
        },
        async retriveCart() {
            try {
                this.cartList = await cartService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        deleteCart(id) {
            swalert
				.fire({
					title: "Hủy đơn hàng",
					icon: "warning",
					text: "Bạn muốn hủy đơn?",
					showCloseButton: true,
					showCancelButton: true,
				})
				.then(async (result) => {
					if (result.isConfirmed) {
						try {
							await cartService.delete(id);
							swtoast.success({
								text: "Hủy đơn thành công",
							});
							this.$router.push({ name: "Product" });
						} catch (error) {
							console.log(error);
							swtoast.error({
								text: "Đã có lỗi xảy ra.",
							});
						}
					}
				});
        },
        refreshList() {
            this.retriveCart()
            this.retriveProduct();
        }
    },
    created() {
        if (!this.currentUser) {
            this.$router.push({ name: "Login"});
        }
    },
    mounted() {
        this.refreshList()
    },
}
</script>

<style scoped>
    /* div{
        margin-top: 100px;
        text-align: center;
    } */
    .box{
        width: 100px;
        height: 100px;
        background-color: aqua;
        border-radius: 50%;
        text-align: center;
    }
    .container-custom {
        margin-top: 10px;
    }

    div[data-v-e0b47cf6] {
        margin-top: 0px;
        text-align: justify;
    }

    .admin-function{
        margin-top: 10px;
    }

    h2 {
        text-align: center;
    }

    h3 {
        padding-bottom: 5px;
        border-top: 2px solid navajowhite;
        border-bottom: 2px solid navajowhite;
    }

    i{
        color: blue;
    }

    .margin-bottom{
        margin-bottom: 10px;
    }
</style>
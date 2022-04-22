<template>
    <Form
        @submit="$emit('submit:product', productLocal)"
        :validation-schema="productFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên sản phẩm</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="productLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="code">Mã sản phẩm</label>
            <Field
                name="code"
                type="text"
                class="form-control"
                v-model="productLocal.code"
            />
            <ErrorMessage name="code" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="description">Mô tả</label>
            <Field
                name="description"
                type="text"
                class="form-control"
                v-model="productLocal.description"
            />
            <ErrorMessage name="description" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="imgProduct">Tên hình ảnh sản phẩm</label>
            <Field
                name="imgProduct"
                type="text"
                class="form-control"
                v-model="productLocal.image"
            />
            <ErrorMessage name="imgProduct" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="cost">Giá thành</label>
            <Field
                name="cost"
                type="text"
                class="form-control"
                v-model="productLocal.cost"
            />
            <ErrorMessage name="cost" class="error-feedback"/>
        </div>
        <div class="form-group form-check">
            <input 
                name="status"
                type="checkbox"
                class="form-check-input"
                v-model="productLocal.status"
            >
            <label for="status" class="form-check-label">
                <strong>Còn hàng</strong>
            </label>
        </div>
        <div class="form-group">
            <button
                class="btn btn-primary margin"
            >
            Lưu
            </button>
            <button
                v-if="productLocal._id"
                type="button"
                class="ml-2 btn btn-danger margin"
                @click="$emit('delete:product', productLocal._id)"
            >
            Xóa
            </button>
            <button
                class="ml-2 btn btn-primary margin"
                @click="gobackAdmin"
            >
            Quay lại
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:product", "delete:product"],
    props: {
        product: { type: Object, required: true },
    },
    data() {
        const productFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Hãy nhập tên sản phẩm.")
                .min(12, "Tên ít nhất có 12 ký tự."),
            code: yup
                .string()
                .min(5, "Mã sản phẩm phải có ít nhất 5 ký tự.")
                .max(12, "Mã sản phẩm nhiều nhất là 12 ký tự."),
            cost: yup.number().required("Phải nhập giá sản phẩm."),
        });
        return {
            productLocal: this.product,
            productFormSchema,
        };
    },
    methods: {
        gobackAdmin() { 
            this.$router.push({ name: "User" });
        }
    },
}
</script>

<style scoped>
@import "../assets/form.css";
.margin{
    margin-top: 5px;
    margin-right: 10px;
}
</style>
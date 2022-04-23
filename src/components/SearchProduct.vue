<template>
    <div class="input-group mb-3 container">
        <input
            type="text"
            class="form-control"
            placeholder="Tìm kiếm"
            :value="modelValue"
            @input="updateModelValue"
            @keyup.enter="submit"
        />
        <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                @click="submit"
            >
            <i class="fas fa-search"></i> Tìm kiếm
        </button>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
}
</script>
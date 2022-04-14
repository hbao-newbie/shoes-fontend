<template>
    <div class="input-group">
        <input
            type="text"
            class="form-control"
            placeholder="Tìm kiếm"
            :value="modeValue"
            @input="updateModelValue"
            @keyup.enter="submit"
        />
        <div class="input-group-append">
            <button
                class="btn btn-outline-secondary"
                type="button"
                @click="submit"
            >
            <i class="fas fa-search"></i> Tìm kiếm
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modeValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(event) {
            this.$emit("update:modelValue", event.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
}
</script>
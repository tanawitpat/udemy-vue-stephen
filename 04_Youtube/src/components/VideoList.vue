<template>
    <ul>
        VideoList
    </ul>
</template>

<script>
export default {
    name: "VideoList",
    methods: {
        onInput: function(event) {
            this.$emit("termChange", event.target.value)
        }
    }
}
</script>

<style>
</style>
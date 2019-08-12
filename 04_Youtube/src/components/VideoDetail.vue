<template>
    <div v-if="video">
        {{ video.snippet.title }}
    </div>
</template>

<script>
import VideoListItem from "./VideoListItem"

export default {
    name: "VideoDetail",
    props: {
        "video": Object
    }
}
</script>

<style>
</style>
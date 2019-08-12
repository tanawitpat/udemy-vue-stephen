<template>
    <div v-if="video">
        <div>
            <iframe :src="videoUrl"/>
        </div>
        <div class="details">
            <h4>{{ video.snippet.title }}</h4>
            <p>{{ video.snippet.description }}</p>
        </div>
    </div>
</template>

<script>
import VideoListItem from "./VideoListItem"

export default {
    name: "VideoDetail",
    props: {
        "video": Object
    },
    computed: {
        videoUrl() {
            const videoId = this.video.id.videoId
            return `https://www.youtube.com/embed/${videoId}`
        }
    }
}
</script>

<style scoped>
.details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>
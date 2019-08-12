<template>
    <div>
        <SearchBar @termChange="onTermChange"/>
    </div>
</template>

<script>
import axios from "axios"
import SearchBar from "./components/SearchBar"

const API_KEY = "AIzaSyDM_DYp9-5MUhw9CrO2DzEcrK6spblE8Vw"

export default {
    name: "App",
    components: {
        SearchBar
    },
    methods: {
        onTermChange: function(searchTerm) {
            axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    key: API_KEY,
                    type: "video",
                    part: "snippet",
                    q: searchTerm
                }
            }).then(response => console.log(response))
        }
    }
}
</script>
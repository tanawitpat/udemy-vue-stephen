<template>
    <div>
        <SearchBar @termChange="onTermChange"/>
    </div>
</template>

<script>
import SearchBar from "./components/SearchBar"

export default {
    name: "App",
    components: {
        SearchBar
    },
    methods: {
        onTermChange: function(searchTerm) {
            console.log(searchTerm)
        }
    }
}
</script>
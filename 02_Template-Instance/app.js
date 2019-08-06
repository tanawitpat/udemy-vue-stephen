new Vue({
    el: "#app",
    methods: {
        onNewText: function(event) {
            console.log(event.target.value)
        }
    }
})
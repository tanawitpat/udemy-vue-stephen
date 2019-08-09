new Vue({
    el: "#app",
    data: { // Initialize our list of "ingredients"
        textInput: ""
    },
    computed: { // Turn data into viewable values
        identicon: function() {
            return jdenticon.toSvg(this.textInput, 200)
        },
        reverse: function() {
            return this.textInput.split("").reverse().join("")
        }
    },
    methods: { // Use these function to change data
        onInput: function(event) {
            this.textInput = event.target.value
        }
    },
    template: `
        <div>
            <h3>My Identicon Generator</h3>
            <div>
                Input:
                <input v-on:input="onInput"/>
            </div>
            <div>
                Output:
                {{ textInput.split("").reverse().join("") }}
                {{ reverse }}
            </div>
            <script src="app.js"></script>
        </div>
    `
})
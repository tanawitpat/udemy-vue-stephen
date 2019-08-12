new Vue({
    el: "#app",
    methods: {
        logPi() {
            console.log(Math.PI)
        }
    },
    template: `
        <div>
            Click the button to log out the value of PI
            <button @click="logPi">Click me</button>
        </div>
    `
})
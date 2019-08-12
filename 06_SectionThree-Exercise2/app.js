new Vue({
    el: "#app",
    data() {
        return { count: 0 }
    },
    methods: {
        increment() {
            this.count = this.count+1
        },
        decrement() {
            this.count = this.count-1
        }
    },
    template: `
        <div>
            Current count: {{ count }}
            <div>
                <button @click="decrement">-</button>
                <button @click="increment">+</button>
            </div>
        </div>
    `
})
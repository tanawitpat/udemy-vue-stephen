new Vue({
    el: "#app",
    data: { 
        title: "First Vue App", 
        styleOne: {}, 
        styleTwo: {} 
    },
    methods: {
        onMouseMove(event) {
            this.styleOne = transform(-event.clientX / event.clientY)
            this.styleTwo = transform(event.clientX / event.clientY)
        }
    }
})

function transform(offset) {
    const cos = Math.cos(offset)
    const sin = Math.sin(offset)
    return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` }
}
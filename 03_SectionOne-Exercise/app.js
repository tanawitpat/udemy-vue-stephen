new Vue({
    el: "#app",
    template: `
        <div>
            {{ new Date().getDay() === 5 ? "Its Friday" : "Its not Friday" }}
        </div>
    `
})
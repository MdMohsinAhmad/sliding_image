// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//     panel.addEventListener("click", () => {
//         removeActiveClass()
//         panel.classList.add("active")
//     });
// });

// const removeActiveClass = () => {
//     panels.forEach((panel) => {
//         panel.classList.remove("active")
//     })
// }

const press = document.querySelectorAll(".panel")
press.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        remove_active()
        panel.classList.add("active")
    })
})
const remove_active=()=>{
    press.forEach((panel)=>{
            panel.classList.remove("active")
       
    })
}


























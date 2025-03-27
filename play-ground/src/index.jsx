import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function MainContent() {
    return <h1>React is great!</h1>
}
function OrderTest() {
    return <h2>Order test</h2>
}
root.render(
    <div>
        <OrderTest/>
        <MainContent />
    </div>
)

// with vanila
const element = document.createElement('h2')
element.className = 'header'
element.innerText = 'i am from vanila'
document.body.appendChild(element)



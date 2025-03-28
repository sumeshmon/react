import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function MainContent() {
    return (
        <>
            <h1>React is great!</h1>
            <p>This is para</p>
        </>
    
    )
    
}

root.render(
    <div>
        <MainContent/>
        <img src='/logo.png' alt="My React " className='logo'/>   
    </div>
)

// with vanila
const element = document.createElement('h2')
element.className = 'header'
element.innerText = 'i am from vanila'
document.body.appendChild(element)
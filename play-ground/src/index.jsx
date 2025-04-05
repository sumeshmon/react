import { createRoot } from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"


const root = createRoot(document.getElementById("root"))

function App() {
    return (
        <>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
        
    )
    
}

root.render(
   <App/>
)

// with vanila
// const element = document.createElement('h2')
// element.className = 'header'
// element.innerText = 'i am from vanila'
// document.body.appendChild(element)
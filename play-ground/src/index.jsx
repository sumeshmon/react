import { createRoot } from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"


const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
        
    )
    
}

root.render(
   <Page/>
)

// with vanila
// const element = document.createElement('h2')
// element.className = 'header'
// element.innerText = 'i am from vanila'
// document.body.appendChild(element)
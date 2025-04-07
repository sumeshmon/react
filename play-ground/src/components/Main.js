export default function Main () {
    return (
        <main>
            <div className="main-content">
                <h1>Fun facts about reat</h1>
                <ul>
                    <li>You're importing the createRoot function from the React 18+ module react-dom/client. This is part of React's new concurrent rendering system introduced in React 18.</li>
                    <li>In React 18, the React team moved the new createRoot API into a separate entry point called react-dom/client. This keeps it distinct from the older ReactDOM.render() method that lives in react-dom.</li>
                    <li>
                    It creates a root rendering context for your app. This is part of the newer Concurrent Mode architecture in React 18, which improves performance and adds features like:
                    <ul>
                        <li>Selective hydration</li>
                        <li>Transitions</li>
                        <li>Automatic batching</li>
                        <li>Improved suspense handling</li>
                    </ul>
                    </li>
                    <li> Imports the createRoot function</li>
                    <li>createRoot is the new way to start rendering apps in React 18.</li>
                </ul>
            </div>
        </main>
    )
}
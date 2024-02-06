import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="min-h-screen max-w-[1000px] mx-auto flex flex-col">
            <header className="p-4 bg-sky-900 text-white font-bold text-4xl">
                Todo App
            </header>
                <TodoList />
            <footer className="p-4 text-center bg-sky-900 text-white">
                Copyright 2024
            </footer>
        </div>
        
    );
}

export default App;

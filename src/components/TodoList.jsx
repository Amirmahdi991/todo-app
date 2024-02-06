import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import moment from "moment";
import { toast } from "react-toastify";



function TodoList() {
    const [todos, setTodos] = useState(undefined);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos === null) {
            localStorage.setItem("todos", "[]");
        } else {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        if (todos) {
            // save todos to local storage
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    const handleCreateTodo = () => {
        const id = uuidv4();
        const created_at = moment().unix();
        setTodos((prev) => {
            if (prev) {
                return [
                    {
                        id: id,
                        text: inputValue,
                        done: false,
                        created_at: created_at,
                    },
                    ...prev,
                ];
            } else {
                return [
                    {
                        id: id,
                        text: inputValue,
                        done: false,
                        created_at: created_at,
                    },
                ];
            }
        });
        setInputValue("");
        toast.success("Todo added successfully.");
    };

    const handleDeleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
        toast.success("Todo deleted successfully.");
    };

    const handleUpdateTodo = (id, done) => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, done: done };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <section className="flex-1">
            <div className="bg-violet-400 p-4">
                <h3 className="font-bold mb-4">Create Todo</h3>
                <div className="flex items-center gap-4">
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                        className="flex items-center h-[50px] px-4 w-full bg-white rounded-lg outline-none"
                        placeholder="Todo Content"
                    />
                    <button
                        onClick={handleCreateTodo}
                        className="flex items-center justify-center h-[50px] px-4 w-[200px] bg-violet-700 rounded-lg outline-none text-white"
                    >
                        Create Todo
                    </button>
                </div>
            </div>
            <div>
                {todos &&
                    (todos.length > 0 ? (
                        <>
                            <h3 className="font-bold mt-4">My Todos</h3>
                            <div className="mb-4">
                                {todos.map((todo) => (
                                    <TodoCard
                                        todo={todo}
                                        key={todo.id}
                                        onDelete={handleDeleteTodo}
                                        onUpdate={handleUpdateTodo}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <h3 className="font-bold mt-4">There is no todo!</h3>
                    ))}
            </div>
        </section>
    );
}

export default TodoList;

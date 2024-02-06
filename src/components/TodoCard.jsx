 import moment from "moment";

function TodoCard(props) {
    const { todo, onDelete, onUpdate } = props;

    const handleDeleteTodo = () => {
        onDelete(todo.id);
    };

    const handleUpdateTodo = (id, done) => {
        onUpdate(id, done);
    };

    return (
        <div
            className={`p-4 bg-gray-600 rounded-lg mt-4 ${
                todo.done ? "opacity-70" : ""
            }`}
        >
            <p className="text-white text-lg mb-4">{todo.text}</p>
            <p className="font-bold italic text-white mb-4">
                Create Date: {moment.unix(todo.created_at).fromNow()}
            </p>
            <div className="">
                <label className="flex items-center gap-2 cursor-pointer text-white">
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={(e) =>
                            handleUpdateTodo(todo.id, e.target.checked)
                        }
                    />
                    Done
                </label>
            </div>
            <button
                onClick={handleDeleteTodo}
                className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer mt-4"
            >
                Delete Todo
            </button>
        </div>
    );
}

export default TodoCard;

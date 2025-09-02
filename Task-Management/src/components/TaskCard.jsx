export default function TaskCard({ task, onToggle, onEdit, onDelete }) {
const isCompleted = task.status === "completed";
return (
<div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-semibold text-lg">{task.title}</h3>
<p className="text-sm text-gray-600">{task.description}</p>
</div>
<span className={`text-xs px-2 py-1 rounded-full ${
isCompleted ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
}`}>
{isCompleted ? "Completed" : "Pending"}
</span>
</div>
<p className="text-xs text-gray-500">Due: {task.dueDate}</p>
<div className="flex gap-2 mt-2">
<button onClick={onToggle} className="px-2 py-1 text-sm bg-indigo-600 text-white rounded">Toggle</button>
<button onClick={onEdit} className="px-2 py-1 text-sm bg-amber-500 text-white rounded">Edit</button>
<button onClick={onDelete} className="px-2 py-1 text-sm bg-rose-600 text-white rounded">Delete</button>
</div>
</div>
);
}
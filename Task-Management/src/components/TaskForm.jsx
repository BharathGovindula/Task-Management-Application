import { useEffect, useState } from "react";


export default function TaskForm({ open, onClose, onSave, initial }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [dueDate, setDueDate] = useState("");


useEffect(() => {
if (initial) {
setTitle(initial.title || "");
setDescription(initial.description || "");
setDueDate(initial.dueDate || "");
} else {
setTitle("");
setDescription("");
setDueDate("");
}
}, [initial, open]);


if (!open) return null;


const submit = (e) => {
e.preventDefault();
onSave({ title, description, dueDate });
};


return (
<div className="fixed inset-0 bg-black/40 grid place-items-center p-4">
<form onSubmit={submit} className="bg-white w-full max-w-md p-6 rounded-xl shadow space-y-3">
<h2 className="text-lg font-semibold">{initial ? "Edit Task" : "Add Task"}</h2>
<input className="w-full border rounded p-2" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
<textarea className="w-full border rounded p-2" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
<input type="date" className="w-full border rounded p-2" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} required />
<div className="flex justify-end gap-2 pt-2">
<button type="button" onClick={onClose} className="px-3 py-1 rounded border">Cancel</button>
<button type="submit" className="px-3 py-1 rounded bg-blue-600 text-white">Save</button>
</div>
</form>
</div>
);
}
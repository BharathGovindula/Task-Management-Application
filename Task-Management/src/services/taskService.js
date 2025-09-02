import { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

// Collection reference helper

const tasksCollection = (uid) => collection(db, "tasks");

// Watch tasks with optional status filter
export const watchTasks = (uid, setTasks, statusFilter = "all") => {
  if (!uid) return () => {};
  
  const baseQuery = query(
    tasksCollection(uid),
    where("userId", "==", uid),
    orderBy("dueDate", "asc")
  );
  
  return onSnapshot(baseQuery, (snapshot) => {
    let tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    
    if (statusFilter !== "all") {
      tasks = tasks.filter((task) => task.status === statusFilter);
    }
    
    setTasks(tasks);
  });
};

// Add a new task
export const addTask = async (uid, taskData) => {
  if (!uid) throw new Error("User must be authenticated");
  
  return await addDoc(tasksCollection(uid), {
    ...taskData,
    userId: uid,
    status: taskData.status || "pending",
    createdAt: new Date().toISOString()
  });
};

// Update an existing task
export const updateTask = async (taskId, data) => {
  if (!taskId) throw new Error("Task ID is required");
  
  return await updateDoc(doc(db, "tasks", taskId), data);
};

// Delete a task
export const deleteTask = async (taskId) => {
  if (!taskId) throw new Error("Task ID is required");
  
  return await deleteDoc(doc(db, "tasks", taskId));
};
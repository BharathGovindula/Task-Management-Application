import { auth, db } from "../firebase";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


export const signup = async (name, email, password) => {
const cred = await createUserWithEmailAndPassword(auth, email, password);
await updateProfile(cred.user, { displayName: name });
await setDoc(doc(db, "users", cred.user.uid), {
name,
profilePic: "",
createdAt: Date.now(),
});
return cred.user;
};


export const login = (email, password) =>
signInWithEmailAndPassword(auth, email, password);


export const logout = () => signOut(auth);
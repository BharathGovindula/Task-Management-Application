import { db, storage } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export const getUserProfile = async (uid) => {
const refDoc = doc(db, "users", uid);
const snap = await getDoc(refDoc);
return snap.exists() ? snap.data() : null;
};


export const updateUserProfile = async (uid, { name, file }) => {
let profilePicUrl;
if (file) {
const r = ref(storage, `profiles/${uid}`);
await uploadBytes(r, file);
profilePicUrl = await getDownloadURL(r);
}
await setDoc(
doc(db, "users", uid),
{
...(name && { name }),
...(profilePicUrl && { profilePic: profilePicUrl }),
updatedAt: Date.now(),
},
{ merge: true }
);
return profilePicUrl;
};
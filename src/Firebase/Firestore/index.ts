import {
  getFirestore,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "../main";
import { extractId } from "./helpers";
import {
  UserRoleData,
  NewItemPropTypes,
  UpdateItemStatusPropTypes,
  DeleteItemPropTypes,
  CollectionName,
} from "./types";

export const db = getFirestore(app);

/**
 * Function creates a new document in "users" collection where sets a new user's role and uid;
 *
 * @param {ROLES} role - new user's role in the system (admin or garson);
 * @param {string} uid - new user's uid;
 */
export const setNewUserRoleData = async ({
  role,
  uid,
}: UserRoleData): Promise<void> => {
  try {
    await addDoc(collection(db, "users"), { role: role, uid: uid });
  } catch (error) {
    throw new Error(`AN ERROR OCCURED: ${error}`);
  }
};

/**
 * Function gets user role data from firestore according to user's uid.
 *
 * @param {string} uid - current user's uid;
 * @returns a current user's role in the system.
 */
export const getUserRoleData = async (
  uid: string | undefined
): Promise<string | undefined> => {
  let currentUserRole;
  const q = query(collection(db, "users"), where("uid", "==", uid));
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      currentUserRole = data.role;
    });
    return currentUserRole;
  } catch (error) {
    throw new Error(`AN ERROR OCCURED: ${error}`);
  }
};

export const addNewItemToCheck = async ({
  collectionName,
  customer,
  link,
  status,
}: NewItemPropTypes): Promise<void> => {
  try {
    await addDoc(collection(db, collectionName), {
      customer: customer,
      id: extractId(link),
      link: link,
      status: status,
    });
  } catch (error) {
    throw new Error(`AN ERROR OCCURED: ${error}`);
  }
};

const getDocRefById = async (collectionName: CollectionName, id: number) => {
  try {
    const q = query(collection(db, collectionName), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docRef = querySnapshot.docs[0].ref;
      return docRef;
    }
  } catch (error) {
    throw new Error("No document found with the given field value. ");
  }
};

export const updateItemStatus = async ({
  collectionName,
  id,
  newStatus,
}: UpdateItemStatusPropTypes) => {
  try {
    const docRef = await getDocRefById(collectionName, id);
    docRef && (await updateDoc(docRef, { status: newStatus }));
  } catch (error) {
    throw new Error(`AN ERROR OCCURED: ${error}`);
  }
};

export const deleteItem = async ({
  collectionName,
  id,
}: DeleteItemPropTypes) => {
  try {
    const docRef = await getDocRefById(collectionName, id);
    docRef && (await deleteDoc(docRef));
  } catch (error) {
    throw new Error(`AN ERROR OCCURED: ${error}`);
  }
};

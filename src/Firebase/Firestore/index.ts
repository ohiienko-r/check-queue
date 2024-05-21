import {
  getFirestore,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  DocumentReference,
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

/**
 * Function adds new document with item to check data.
 *
 * @param {CollectionName} collectionName - name of the collection where you want to add the new document;
 * @param {string} customer - name of the customer;
 * @param {string} link - link to the item that requires checks;
 * @param {ItemStatus} - item check status;
 */
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

/**
 *
 * @param {CollectionName} collectionName - name of the collection from where to extract document reference;
 * @param {number} id - internal id field of the document;
 * @returns required document reference according to id and collection.
 */
const getDocRefById = async (
  collectionName: CollectionName,
  id: number
): Promise<DocumentReference | undefined> => {
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

/**
 * Function updates item check status.
 *
 * @param {CollectionName} collectionName - name of the collection from where to update the document;
 * @param {number} id - internal id field of the document;
 * @param {ItemStatus} newStatus - new item status value;
 */
export const updateItemStatus = async ({
  collectionName,
  id,
  newStatus,
}: UpdateItemStatusPropTypes): Promise<void> => {
  try {
    const docRef = await getDocRefById(collectionName, id);
    docRef && (await updateDoc(docRef, { status: newStatus }));
  } catch (error) {
    throw new Error(`AN ERROR OCCURED: ${error}`);
  }
};

/**
 * Function deletes check item document.
 *
 * @param {CollectionName} collectionName - name of the collection from where to delete the document;
 * @param {number} id - internal id field of the document;
 */
export const deleteItem = async ({
  collectionName,
  id,
}: DeleteItemPropTypes): Promise<void> => {
  try {
    const docRef = await getDocRefById(collectionName, id);
    docRef && (await deleteDoc(docRef));
  } catch (error) {
    throw new Error(`AN ERROR OCCURED: ${error}`);
  }
};

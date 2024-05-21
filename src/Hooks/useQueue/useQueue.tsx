import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/Firebase";
import { CollectionName } from "@/Firebase/Firestore/types";
import { CheckItem } from "@/types";

const useQueue = (collectionName: CollectionName) => {
  const [queue, setQueue] = useState<CheckItem[]>();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (querySnapshot) => {
        const pcbData: CheckItem[] = [];
        querySnapshot.forEach((pcb) => {
          pcbData.push(pcb.data() as CheckItem);
        });
        setQueue(pcbData);
      }
    );
    return unsubscribe;
  }, []);

  return queue;
};

export default useQueue;

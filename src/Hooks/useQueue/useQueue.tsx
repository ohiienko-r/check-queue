import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/Firebase";
import { CollectionName } from "@/Firebase/Firestore/types";
import { CheckItem } from "@/types";

const useQueue = (collectionName: CollectionName) => {
  const [queue, setQueue] = useState<CheckItem[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (querySnapshot) => {
        console.log("data start loading");
        const pcbData: CheckItem[] = [];
        querySnapshot.forEach((pcb) => {
          pcbData.push(pcb.data() as CheckItem);
        });
        setQueue(pcbData);
        console.log("data loaded");
      }
    );
    return unsubscribe;
  }, [collectionName]);

  return queue;
};

export default useQueue;

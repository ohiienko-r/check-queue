import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/Firebase";
import { CollectionName } from "@/Firebase/Firestore/types";
import { CheckItem } from "@/types";

const useQueue = (collectionName: CollectionName) => {
  const [queue, setQueue] = useState<CheckItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (querySnapshot) => {
        const pcbData: CheckItem[] = [];
        querySnapshot.forEach((pcb) => {
          pcbData.push(pcb.data() as CheckItem);
        });
        setQueue(pcbData);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, [collectionName]);

  return { queue, loading };
};

export default useQueue;

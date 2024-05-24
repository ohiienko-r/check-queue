import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/Firebase";
import { CollectionName } from "@/Firebase/Firestore/types";
import { CheckItem } from "@/types";

const useQueue = (collectionName: CollectionName) => {
  const [queue, setQueue] = useState<{ queue: CheckItem[]; loading: boolean }>({
    queue: [],
    loading: true,
  });

  useEffect(() => {
    setQueue({ queue: [], loading: true });
    const unsubscribe = onSnapshot(
      query(collection(db, collectionName), orderBy("createdAt")),
      (querySnapshot) => {
        const pcbData: CheckItem[] = [];
        querySnapshot.forEach((pcb) => {
          pcbData.push(pcb.data() as CheckItem);
        });
        setQueue({ queue: pcbData, loading: false });
      }
    );
    return unsubscribe;
  }, [collectionName]);

  return { queue: queue.queue, loading: queue.loading };
};

export default useQueue;

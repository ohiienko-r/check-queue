import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/Firebase";
import { CheckItem } from "@/types";

const usePcbQueue = () => {
  const [pcbQueue, setPcbQueue] = useState<CheckItem[]>();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "pcb"), (querySnapshot) => {
      const pcbData: CheckItem[] = [];
      querySnapshot.forEach((pcb) => {
        pcbData.push(pcb.data() as CheckItem);
      });
      setPcbQueue(pcbData);
    });
    return unsubscribe;
  }, []);

  return pcbQueue;
};

export default usePcbQueue;

import { useQueue } from "@/Hooks";

const PcbPage = () => {
  const queue = useQueue("pcb");
  console.log(queue);

  return <h2>PCB queue</h2>;
};

export default PcbPage;

import { usePcbQueue } from "@/Hooks";

const PcbPage = () => {
  const queue = usePcbQueue();
  console.log(queue);

  return <h2>PCB queue</h2>;
};

export default PcbPage;

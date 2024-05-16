import { Button } from "@/components";
import { logOut } from "@/Firebase";

const RfqPage = () => {
  return (
    <>
      <h2>RFQ</h2>
      <Button style="dismiss" innerText="Sign Out" onPress={logOut} />
    </>
  );
};

export default RfqPage;

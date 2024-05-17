import { Button } from "@/components";
import { logOut } from "@/Firebase";
import { useNavigate } from "react-router-dom";
import { ROUTES_NAMES } from "@/Router/routes-names";

const RfqPage = () => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logOut();
    navigate(ROUTES_NAMES.ROOT);
  };
  return (
    <>
      <h2>RFQ</h2>
      <Button style="dismiss" innerText="Sign Out" onPress={handleLogOut} />
    </>
  );
};

export default RfqPage;

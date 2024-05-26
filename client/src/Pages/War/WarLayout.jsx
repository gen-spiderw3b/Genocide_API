import { Outlet, useOutletContext } from "react-router-dom";

const WarLayout = () => {
  const { user } = useOutletContext();
  console.log(user);

  return (
    <>
      <Outlet />
    </>
  );
};
export default WarLayout;

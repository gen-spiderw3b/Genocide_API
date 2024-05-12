import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Wrapper from "../../Wrappers/BigSidebar/bigSidebar";
const BigSidebar = () => {
  const { closeBigSidebar } = UseDashboardContext();

  return (
    <Wrapper>
      <div>bigSideBar</div>
      <button onClick={closeBigSidebar}>
        <FaTimes />
      </button>
    </Wrapper>
  );
};
export default BigSidebar;

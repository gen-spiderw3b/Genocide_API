import { useRouteError, Link } from "react-router-dom";
import Img from "../../public/error-WMaxsmkR.jpg";
import Wrapper from "../../Wrappers/Error/error";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={Img} alt="Error" className="img" />
        <h3>Page Not Found!</h3>
        <p>{error.data}</p>
        <Link to="/">back to home</Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>something went wrong! </h3>
      </div>
    </Wrapper>
  );
};
export default Error;

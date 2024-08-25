import { useLocation, useParams, Link } from "react-router-dom";
import Wrapper from "../../../Wrappers/UserGroup/Views/readMessages";
const ReadMessages = () => {
  const { groupMemberId } = useParams();
  const location = useLocation();
  const { msg } = location.state;

  return (
    <Wrapper>
      <article className="article">
        <p>{msg}</p>
      </article>
      <div className="btn-container">
        <Link to={"../views/messages"} className="back">
          go back
        </Link>
        <Link to={`../reply/${groupMemberId}`} className="reply">
          reply
        </Link>
      </div>
    </Wrapper>
  );
};
export default ReadMessages;

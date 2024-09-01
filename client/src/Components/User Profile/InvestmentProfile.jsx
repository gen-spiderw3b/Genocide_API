import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

const InvestmentProfile = ({ group, user }) => {
  const [index, setIndex] = useState(0);

  if (group.length === 0) {
    return (
      <div className="error-msg">
        <h2>you have not joined a investment group</h2>
      </div>
    );
  }

  const { groupName, investment, member } = group[index];

  const prevBtn = () => {
    setIndex((index) => {
      const prevIndex = index - 1;
      if (prevIndex < 0) {
        return group.length - 1;
      }
      return prevIndex;
    });
  };
  const nextBtn = () => {
    setIndex((index) => {
      const nextIndex = index + 1;
      if (nextIndex > group.length - 1) {
        return 0;
      }
      return nextIndex;
    });
  };

  return (
    <div>
      <article className="investment-article">
        <div className="title">
          <h2>{groupName}</h2>
        </div>
        <h2>{investment}</h2>
        {member.map((item) => {
          const {
            _id,
            firstName,
            lastName,
            state,
            city,
            permission,
            uniqueName,
            createdBy,
          } = item;
          if (_id && user._id !== createdBy) return;
          return (
            <ul key={_id} className="lists">
              <li>firstName: {firstName}</li>
              <li>lastName: {lastName}</li>
              <li>uniqueName: {uniqueName}</li>
              <li>state: {state}</li>
              <li>city: {city}</li>
              <li>role: {permission.role}</li>
            </ul>
          );
        })}
      </article>
      <div className="investment-btn-container">
        <button type="button" className="prev" onClick={prevBtn}>
          <FaChevronCircleLeft />
        </button>
        <button type="button" className="next" onClick={nextBtn}>
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};
InvestmentProfile.propTypes = {
  group: PropTypes.array,
  user: PropTypes.object,
};
export default InvestmentProfile;

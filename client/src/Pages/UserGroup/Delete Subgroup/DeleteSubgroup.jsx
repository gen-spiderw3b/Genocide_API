import Wrapper from "../../../Wrappers/UserGroup/SubGroup/deleteSubgroup";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Form, useNavigation, useLoaderData } from "react-router-dom";
import customFetch from "../../../Utils/customFetch";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get(
      "/investment/user-group/view-created-subgroups"
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const DeleteSubgroup = () => {
  const { subgroups } = useLoaderData();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [group] = useState(subgroups);
  if (group.length === 0) {
    return (
      <Wrapper>
        <h1 className="delete-msg">no subgroups</h1>
      </Wrapper>
    );
  }

  const { _id, subgroupName, joinedBy } = group[index];
  const isSubmitting = navigation.state === "submitting";

  const nextBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > group.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const prevBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return group.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <Wrapper>
      <div className="title">
        <h3>
          delete <span>subgroup</span>
        </h3>
      </div>
      <div className="title-underline"></div>
      <article className="article">
        <h4>{subgroupName}</h4>
        <p>members:</p>
        <p>{joinedBy.length}</p>
        <Form method="post" action={`../delete-subgroup/${_id}`}>
          <button type="button" className="prev-btn" onClick={prevBtn}>
            <FaChevronCircleLeft />
          </button>
          <button type="submit" className="delete-btn" disabled={isSubmitting}>
            {isSubmitting ? "deleteing group..." : "delete subgroup"}
          </button>
          <button type="button" className="next-btn" onClick={nextBtn}>
            <FaChevronCircleRight />
          </button>
        </Form>
      </article>
    </Wrapper>
  );
};
export default DeleteSubgroup;

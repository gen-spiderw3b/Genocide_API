/* eslint-disable no-undef */
import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import customFetch from "../../../Utils/customFetch";
import Wrapper from "../../../Wrappers/UserGroup/Headline/deleteHeadline";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/view-headline/${params.groupId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const DeleteHeadline = () => {
  const { viewHeadline } = useLoaderData();
  const [index, setIndex] = useState(0);
  const [headlines] = useState(viewHeadline);

  if (headlines.length === 0) {
    return <h1>no headlines</h1>;
  }
  const { _id, category, headline, desc } = headlines[index];

  const nextHeadline = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > headlines.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const prevHeadline = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return headlines.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <Wrapper>
      <article className="article">
        <h3>{category}</h3>
        <h5>{headline}</h5>
        <p>{desc}</p>
        <div className="btn-container">
          <button type="button" onClick={prevHeadline} className="prev-btn">
            <FaChevronCircleLeft />
          </button>
          <Form method="post" action={`../delete-headlines/${_id}`}>
            <button type="submit" className="delete-btn">
              delete headline
            </button>
          </Form>
          <button type="button" onClick={nextHeadline} className="next-btn">
            <FaChevronCircleRight />
          </button>
        </div>
      </article>
    </Wrapper>
  );
};
export default DeleteHeadline;

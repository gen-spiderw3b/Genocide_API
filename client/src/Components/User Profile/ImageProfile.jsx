import PropTypes from "prop-types";
import facepic from "../../public/facepic.jpg";
import { Form } from "react-router-dom";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
// eslint-disable-next-line no-unused-vars
const ImageProfile = ({ pic }) => {
  //Pic Change
  const handlePicChange = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("avatar", file);
    if (file && file.size > 50000) {
      toast.error("Image size too large");
      return null;
    }

    try {
      await customFetch.patch("/users/update-pic", formData);
      return toast.success("Profile Pic Updated succesfully!");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };

  return (
    <>
      <div className="img-container">
        {pic.avatar ? (
          <img src={pic.avatar} alt="photo" className="img" />
        ) : (
          <img src={facepic} alt="generic" className="img" />
        )}
      </div>
      <div className="btn-container">
        <Form method="POST" encType="multipart/form-data">
          <input
            type="file"
            name="avatar"
            className="btn"
            accept="image/*"
            onChange={handlePicChange}
          />
        </Form>
      </div>
    </>
  );
};
ImageProfile.propTypes = {
  pic: PropTypes.object,
};
export default ImageProfile;

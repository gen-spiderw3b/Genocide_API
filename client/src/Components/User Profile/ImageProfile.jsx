import PropTypes from "prop-types";
import facepic from "../../public/facepic.jpg";

// eslint-disable-next-line no-unused-vars
const ImageProfile = ({ pic }) => {
  return (
    <>
      <div className="img-container">
        <img src={facepic} alt="" className="img" />
      </div>
      <div className="btn-container">
        <form action="">
          <input type="file" name="photo" id="photo" className="btn" />
        </form>
      </div>
    </>
  );
};
ImageProfile.propTypes = {
  pic: PropTypes.object,
};
export default ImageProfile;

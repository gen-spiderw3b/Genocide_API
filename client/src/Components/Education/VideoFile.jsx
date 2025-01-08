import PropTypes from "prop-types";

const VideoFile = ({ video }) => {
  return (
    <div>
      <video src={video} controls autoPlay></video>
    </div>
  );
};
VideoFile.propTypes = {
  video: PropTypes.string,
};
export default VideoFile;

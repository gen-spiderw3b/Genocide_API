import PropTypes from "prop-types";

const VideoFile = ({ video }) => {
  return (
    <div className="video-container">
      <video src={video} className="video-file" controls autoPlay></video>
    </div>
  );
};
VideoFile.propTypes = {
  video: PropTypes.string,
};
export default VideoFile;

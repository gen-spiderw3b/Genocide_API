import PropTypes from "prop-types";

const VideoFile = ({ video }) => {
  return (
    <div className="video-container">
      <video src={video} className="video-file" controls autoPlay></video>
      <video
        src={" /opt/render/project/src/public/math/1/section1-1.mp4"}
        className="video-file"
        controls
        autoPlay
      ></video>
      <video
        src={"../public/math/1/section1-1.mp4"}
        className="video-file"
        controls
        autoPlay
      ></video>
    </div>
  );
};
VideoFile.propTypes = {
  video: PropTypes.string,
};
export default VideoFile;

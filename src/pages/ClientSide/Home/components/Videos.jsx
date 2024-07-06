import ReactPlayer from "react-player";

const Videos = ({video_url}) => {
    return (
        <div>
            <p className='text-black font-bold text-4xl text-center py-5 bg-white pt-20'>Videos</p>
            <ReactPlayer
            controls="true"
            height="360px"
            url={video_url}
            width="100%"
          />
        </div>
    );
};

export default Videos;
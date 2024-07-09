import ReactPlayer from "react-player";

const Videos = ({ video_url }) => {
    return (
        <div>
            <p className='text-black font-bold text-4xl text-center py-5 bg-white pt-20'>Videos</p>
            {/* <ReactPlayer
                controls="true"
                height="360px"
                url={video_url}
                width="100%"
            /> */}

            <div className="w-[85vw] h-[48.9vw] sm:w-[65vw] sm:h-[37vw] lg:w-[56vw]  lg:h-[32vw] mx-auto rounded-lg p-2
          bg-[#f6861f]">
                <ReactPlayer
                    controls="true"
                    url={video_url}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
};

export default Videos;
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { makeVisibleTime } from "../../../makeVisibleTime";
import ResponsiveButton from "../../../components/ResponsiveButton";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import ReactPlayer from "react-player";
const BlogCard = ({ blog, slide = false }) => {
    const { author, blogImageUrl, date, description, meta_word, title, _id, videoUrl = '' } = blog;
    return (

        <>
            <Card className={`mt-6 ${slide ? 'w-[60vw] md:max-w-80' : 'w-full md:max-w-80'}`}>
                <CardHeader color="blue-gray" className="relative max-h-32  sm:max-h-56  sm:h-56 border-black">
                {
                        videoUrl ? <ReactPlayer
                            controls="true"
                            url={videoUrl}
                            width="100%"
                            height="100%"
                        /> : <img
                            className='w-full h-full object-cover'
                            src={blogImageUrl}
                            alt="Shoes"

                        />
                    }
                </CardHeader>
                <CardBody className="">
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-sm sm:text-lg">
                        {slide ? (blog?.title || 'Not Given') : (blog?.title || 'Not Given')}
                    </Typography>
                    <Typography>
                        <div className="text-[10px] lg:text-sm  border-black h-[50px] overflow-hidden" dangerouslySetInnerHTML={{ __html: description }}>
                        </div>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 mt-auto">
                    <Link to={`/blogDetails/${blog?._id}`}>
                        <Button className="text-black">Read More</Button>
                    </Link>

                </CardFooter>
            </Card>
        </>


    );
};

export default BlogCard;
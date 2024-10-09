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
const BlogCard = ({ blog, slide = false }) => {
    const description = blog?.description || 'No description available.';
    const truncatedDescription = description.slice(0, 20).split(' ').slice(0, -1).join(' ') + (description.length > 200 ? '...' : '');
    console.log(blog);
    
    return (

        <>
            <Card className={`mt-6 ${slide ? 'w-[60vw] md:max-w-80' : 'w-full md:max-w-80'}`}>
                <CardHeader color="blue-gray" className="relative max-h-32 sm:max-h-56  sm:h-56 border-black">
                    <img
                        src={blog?.blogImageUrl}
                        className="w-full h-full object-cover"
                    />
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
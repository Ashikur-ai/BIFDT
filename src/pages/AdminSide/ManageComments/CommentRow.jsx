/* eslint-disable react/prop-types */
import React from 'react';
import { makeVisibleTime } from '../../../makeVisibleTime';
import { MdDelete, MdEditSquare } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CommentRow = ({ comment, index, handleDelete, blogs }) => {
    const blogTitle = blogs.find(blog=>blog._id===comment?.blogId)?.title;
    return (
        <tr >
            <td>
                {index + 1}
            </td>
            <td>
                <p className="">{comment?.name}</p>
            </td>
            <td>
                <p className="w-[250px]">{comment?.comment}</p>

            </td>
            <td>
                <p>{blogTitle}</p>

            </td>
            <td className="">
                <p className="">{comment?.contactNumber}</p>
            </td>
            <td className="">
                <p className="">{makeVisibleTime(comment?.time)}</p>

            </td>

            <td>
                <button onClick={() => handleDelete(comment?._id)}><MdDelete className="text-2xl text-red-600" /></button>
            </td>
        </tr>
    );
};

export default CommentRow;
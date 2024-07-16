/* eslint-disable react/prop-types */

const CourseCategory = ({ category }) => {
    const { name, qualification, courseFee, durationDetails, executiveBatch, regularBatch, totalClass, duration, courseId } = category
    return (
        <div className="overflow-x-auto w-full ">
            <table className="table overflow-hidden w-[800px] mx-auto text-base bg-primary/30">
                {/* head */}
                <thead className='bg-primary/90 text-white text-base '>
                    <tr>
                        <th>Course Title</th>
                        <th>:</th>
                        <th className="w-[570px] whitespace-normal">{name}</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="">
                        <th>Course Duration</th>
                        <td>:</td>
                        <td>{durationDetails}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className='bg-gray-300'>
                        <th> Regular Batch</th>
                        <td>:</td>
                        <td>{regularBatch}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>Executive Batch </th>
                        <td>:</td>
                        <td>{executiveBatch}</td>
                    </tr>
                    <tr className='bg-gray-300'>
                        <th></th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Total Classes</th>
                        <td>:</td>
                        <td>{totalClass}</td>
                    </tr>
                    <tr className='bg-gray-300'>
                        <th>Qualification</th>
                        <td>:</td>
                        <td>{qualification}</td>
                    </tr>
                    <tr>
                        <th>Course Fee</th>
                        <td>:</td>
                        <td>{courseFee}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CourseCategory;
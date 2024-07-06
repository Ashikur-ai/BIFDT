/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const HomePageCountDown = ({allData }) => {
    const {since,student,rating,instructor ,guarantee,ratio} = allData
    return (
        <div className="mx-2 sm:mx-10 md:mx-20 py-10 my-4 bg-[#f6861f] grid grid-cols-1 lg:grid-cols-6 justify-items-center">
          {/* since, student, rating, instructor, guarantee, ratio */}
          <div className="m-auto text-white py-5 text-center">
            <CountUp className="text-4xl  font-bold" end={since} duration={9} />
            <p className="text-xl font-bold">Since</p>
          </div>

          <div className="m-auto text-white py-5 text-center">
            <span className="text-4xl  font-bold">
              <CountUp className="" end={student} duration={9} /> +
            </span>
            <p className="text-xl font-bold">Students</p>
          </div>

          <div className="m-auto text-white py-5 text-center">
            <CountUp className="text-4xl  font-bold" end={rating} duration={9} />
            <p className="text-xl font-bold">Education ratings</p>
          </div>

          <div className="m-auto text-white py-5 text-center">
            <span className="text-4xl  font-bold">
              <CountUp className="" end={instructor} duration={9} /> +
            </span>
            <p className="text-xl font-bold">Numbers of Instructors</p>
          </div>

          <div className="m-auto text-white py-5 text-center">
            <CountUp className="text-4xl  font-bold" end={guarantee} duration={9} />
            <p className="text-xl font-bold">Education Guarantee</p>
          </div>
          <div className="m-auto text-white py-5 text-center">
            <span className="text-4xl  font-bold">
              <CountUp className="" end={ratio} duration={9} /> %
            </span>
            <p className="text-xl font-bold">Job Success Ratio</p>
          </div>
        </div>
    );
};

export default HomePageCountDown;
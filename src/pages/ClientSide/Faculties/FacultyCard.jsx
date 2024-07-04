/* eslint-disable react/prop-types */

const FacultyCard = ({ faculty }) => {
    return (

        <div className="card h-96 w-[80%] max-w-[320px] sm:w-[320px] border border-gray-500 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-60 w-full overflow-hidden over">
                <img src={faculty.image} alt="Shoes" className=" rounded-xl w-full max-w-[320px] sm:w-[320px] object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-black">{faculty.name}</h2>
                <p className='font-black'>{faculty?.background_of_study ? `${faculty?.background_of_study}` : 'Not given'}</p>
                <p className='font-black'> Experience: {faculty?.job_experience ? `${faculty?.job_experience}+` : 'Not given'}</p>
                {/* <div className="card-actions">
                                            <span className="inline-flex">
                                                {faculty.facebook && (
                                                    <a href={addHttpIfMissing(faculty.facebook)} target="_blank" rel="noopener noreferrer">
                                                        <FaFacebook className="text-2xl" />
                                                    </a>
                                                )}
    
                                                {faculty.whatsapp && (
                                                    <a href={addHttpIfMissing(faculty.whatsapp)} target="_blank" rel="noopener noreferrer">
                                                        <FaWhatsapp className="text-2xl mx-3" />
                                                    </a>
                                                )}
    
                                                {faculty.twitter && (
                                                    <a href={addHttpIfMissing(faculty.twitter)} target="_blank" rel="noopener noreferrer">
                                                        <FaTwitterSquare className="text-2xl" />
                                                    </a>
                                                )}
    
                                            </span>
                                        </div> */}
            </div>
        </div>

        

    );
};

export default FacultyCard;
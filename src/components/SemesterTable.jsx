/* eslint-disable react/prop-types */
import React from 'react';

const SemesterTable = ({ semesterTitle, subjects = [], editable = false, handleDeleteSubject }) => {
    return (
        <div className="overflow-x-auto max-w-[800px] mx-auto relative">
            <div className="absolute top-0 left-0 bg-white w-full h-full"></div>

            <div className="min-w-full border border-gray-200 bg-primary/20 text-xs xs:text-sm sm:text-base z-10 relative">
                {/* Header */}
                <div className="flex bg-primary/90 text-white">
                    {/* Semester Title */}
                    <div className="flex-[3]  px-2 sm:px-4 py-2 text-left">
                        {semesterTitle}
                    </div>
                    {/* Credits Header */}
                    <div className="flex-[2] px-2 sm:px-4 py-2 text-end font-medium border-r-2 border-black w-max">
                        Credits
                    </div>
                    {/* Delete Header */}
                    {editable && (
                        <div className="flex-[1]  border-gray-200 px-0.5  sm:px-1 py-2 text-left">
                            Delete
                        </div>
                    )}
                </div>

                {/* Body */}
                <div>
                    {subjects.map((subject, idx) => (
                        <div key={subject?.id} className="flex items-center border-b-[1.5px] border-b-primary">
                            {/* Index */}
                            <div className="flex-[1] px-2 sm:px-4 py-2 border-r-2 border-black">
                                {idx + 1}
                            </div>
                            {/* Subject Name */}
                            <div className="flex-[3] px-2 sm:px-4 py-2 border-r-2 border-black">
                                {subject.name}
                            </div>
                            {/* Credits */}
                            <div className="flex-[2] px-2 sm:px-4 py-2 text-end font-medium border-r-2 border-black w-max">
                                {subject.credit} Credits
                            </div>
                            {/* Delete Button */}
                            {editable && (
                                <div className="flex-[1] px-2 sm:px-4 py-2 text-left">
                                    <p
                                        onClick={() => handleDeleteSubject(subject.id)}
                                        className="size-5 sm:size-7 bg-red-600 active:scale-90 hover:bg-red-700 rounded-md text-white text-center transition-all duration-300 cursor-pointer flex justify-center items-center"
                                    >
                                        X
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default SemesterTable;
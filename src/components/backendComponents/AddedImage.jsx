/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const AddedImage = ({ allImages, imageInputErr, setAllImages, id }) => {
    const [imageInput, setImageInput] = useState('')
    const handleStoreImages = () => {

        if (imageInput === '') {
            return
        }
        setAllImages([...allImages, { image: imageInput, id: new Date().getTime() }]);
        setImageInput('');
        document.getElementById(id).value = '';
    }
    const handleDeleteImage = (comingImage) => {
        const newImageArray = allImages.filter(image => image.id !== comingImage.id)
        setAllImages(newImageArray)
    }
    const handleImageInputField = (e) => {
        setImageInput(e.target.files[0] || '')

    }
    return (
        <>
            <input id={`${id}`} onChange={handleImageInputField} type="file" name='image1' className="file-input file-input-bordered file-input-md w-full" />
            <p className='text-red-600'>{imageInputErr}</p>
            <p onClick={handleStoreImages} className='btn flex flex-col justify-center items-center px-7 py-1 rounded-md bg-primary text-white hover:font-bold transition-all duration-300 hover:bg-orange-700  active:bg-primary focus:outline-none focus:ring focus:ring-red-300 active:scale-90 focus:text-white w-max'>Add</p>
            <p>Added Image</p>
            {allImages?.length < 1 && <p>No Image Added!!</p>}

            <div className="flex flex-wrap gap-4 pb-5">
                {allImages.map((image, index) => (
                    <div key={index} className="w-28 h-24 relative border border-gray-500 rounded-lg p-1">
                        <p onClick={() => handleDeleteImage(image)} className='text-center bg-gray-200 w-6  h-6 rounded-md ml-auto mb-2 cursor-pointer'>X</p>
                        <img src={URL.createObjectURL(image.image)} alt="preview" className=" h-16 object-cover rounded-md mx-auto pb-2" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default AddedImage;
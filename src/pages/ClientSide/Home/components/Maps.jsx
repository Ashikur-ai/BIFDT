import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Maps = () => {
    return (
        <>


            <div className='w-full  mx-auto'>
                <div className=' sm:px-20 py-10'>
                    <p className='text-pink-700 font-bold text-4xl text-center py-5 bg-white pt-20'>Map Location</p>


                    <iframe className='lg:w-full w-64 mx-auto border-[1.5px] border-pink-700 rounded-md ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2290053788756!2d90.36461461073424!3d23.774858187748187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b028894403%3A0x96574edb07b8a7fd!2sBIFDT%20-%20Bangladesh%20Institute%20of%20Fashion%20%26%20Design%20Technology!5e0!3m2!1sen!2sus!4v1717496611378!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
};
export default Maps;
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


            <div className='w-full bg-pink-600 mx-auto'>
                <div className='px-20'>
                <p className='text-pink-700 font-bold text-4xl text-center py-5 bg-white pt-20'>Map Location</p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.420033929048!2d90.42369807513192!3d23.76805258809889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf537d1f2e09%3A0x8fe7a3faf331a140!2sUniverse%20IT%20Institute!5e0!3m2!1sbn!2sbd!4v1717493269922!5m2!1sbn!2sbd" lg: width="1260" width="265" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
};
export default Maps;
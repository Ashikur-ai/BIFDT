import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

export default function GoogleMap() {
    return (
        <>
            <LoadScript googleMapsApiKey="AIzaSyBrAtjJZ0iOn8R5NHBSoxgrimp5Gu4Ur2k">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </>
    )
}

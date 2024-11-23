import React, { useEffect } from 'react';

const Facebook = () => {
    useEffect(() => {
        // Re-parse the Facebook plugin code after component mounts
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);
    //   
    return (
        <div className=''>
            <div className="fb-page w-full flex justify-center items-center mx-auto"
                data-href="https://www.facebook.com/bifdt.info/"
                data-tabs="timeline"
                data-width="100%"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/bifdt.info/" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/bifdt.info/">bifdt</a>
                </blockquote>
            </div>
        </div>
    );
};

export default Facebook;
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
        <div>
            <div className="fb-page"
                data-href="https://www.facebook.com/bifdt"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/bifdt" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/bifdt">bifdt</a>
                </blockquote>
            </div>
        </div>
    );
};

export default Facebook;
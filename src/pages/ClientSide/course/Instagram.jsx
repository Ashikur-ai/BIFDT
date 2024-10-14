import { useEffect } from "react";

const Instagram = () => {
    useEffect(() => {
        // Re-initialize Instagram embeds after the component mounts
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, []);
    return (
        <div>
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/DAqC7-WBvuQ/"
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: '0',
                    margin: '1px 0',
                    padding: '0',
                    width: '100%'
                }}>
            </blockquote>
        </div>
    );
};

export default Instagram;
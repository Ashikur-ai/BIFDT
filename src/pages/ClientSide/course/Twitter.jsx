import { useEffect } from "react";

const Twitter = () => {
    useEffect(() => {
        // Re-parse the X widget after the component mounts
        if (window.twttr) {
            window.twttr.widgets.load();
        }
    }, []);
    return (
        <div>
            <blockquote
                className="twitter-tweet"
                data-lang="en"
            >
                <a href="https://twitter.com/elonmusk/status/1513274092049948675"></a>
            </blockquote>
        </div>
    );
};

export default Twitter;
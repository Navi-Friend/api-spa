import { useState, memo } from "react";
import placeholder from "../assets/placeholder.jpg";
import loadingGif from "../assets/loading.gif";

function ImageWithPlaceholder({ url, title }) {
    const [loading, setLoading] = useState(true);
    const [imgSrc, setImgSrc] = useState(url);

    const handleError = () => {
        setImgSrc(placeholder);
        setLoading(false);
    };

    return (
        <div>
            {loading && <img className="w-full h-3/4" src={loadingGif} />}

            <img
                src={imgSrc}
                alt={title}
                style={{ display: loading ? "none" : "block" }}
                onLoad={() => setLoading(false)}
                onError={handleError}
            />
            <p className="text-xl text-center">{title}</p>
        </div>
    );
}

export default memo(ImageWithPlaceholder);

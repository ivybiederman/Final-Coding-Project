import React from 'react';

const ShareButton = ({ url, title }) => {
    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
    };

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    const shareOnLinkedIn = () => {
        window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
    };

    return (
        <div>
            <button onClick={shareOnTwitter}>Share on Twitter</button>
            <button onClick={shareOnFacebook}>Share on Facebook</button>
            <button onClick={shareOnLinkedIn}>Share on LinkedIn</button>
        </div>
    );
};

export default ShareButton;

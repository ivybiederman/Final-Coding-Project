import React from 'react';

// Functional component representing share buttons for social media platforms
const ShareButton = ({ url, title }) => {
    // Function to share on Twitter
    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
    };

    // Function to share on Facebook
    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    // Function to share on LinkedIn
    const shareOnLinkedIn = () => {
        window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
    };

    return (
        <div>
            {/* Button to share on Twitter */}
            <button onClick={shareOnTwitter}>Share on Twitter</button>
            {/* Button to share on Facebook */}
            <button onClick={shareOnFacebook}>Share on Facebook</button>
            {/* Button to share on LinkedIn */}
            <button onClick={shareOnLinkedIn}>Share on LinkedIn</button>
        </div>
    );
};

export default ShareButton; // Export the ShareButton component

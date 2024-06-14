import React from 'react';

export const Comment = ({ user, message }) => {

    const extractMediaUrl = (message) => {
        // Regular expressions for different types of media URLs
        const imageRegex = /^(https?:\/\/.*\.(png|gif|webp|jpeg|jpg)\??.*)/i;
        const redditRedirectRegex = /^(https:\/\/www\.reddit\.com\/media\?url=.*)/i;
        const videoRegex = /^(https?:\/\/.*\.(mp4|webm|ogg)\??.*)/i;

        let match;

        // Check for direct image URL
        match = message.match(imageRegex);
        if (match) {
            return { type: 'image', url: match[0] };
        }

        // Check for video URL
        match = message.match(videoRegex);
        if (match) {
            return { type: 'video', url: match[0] };
        }

        // Check for Reddit redirect URL
        match = message.match(redditRedirectRegex);
        if (match) {
            const urlParams = new URLSearchParams(match[0].split('?')[1]);
            const extractedUrl = decodeURIComponent(urlParams.get('url'));

            if (extractedUrl) {
                const isImage = extractedUrl.match(imageRegex);
                const isVideo = extractedUrl.match(videoRegex);
                if (isImage) {
                    return { type: 'image', url: extractedUrl };
                } else if (isVideo) {
                    return { type: 'video', url: extractedUrl };
                }
            }
        }

        return null;
    }

    const media = extractMediaUrl(message);

    const getMessageWithoutUrl = (message, url) => {
        if (!url) {
            return message;
        }
        return message.replace(url, '').trim();
    }

    const comment = getMessageWithoutUrl(message, media?.url);

    return (
        <div style={{ marginBottom: "10px" }}>
            <p><strong>{user}</strong>:</p>
            {media ? (
                media.type === 'image' ? (
                    <img src={media.url} width="300" height="auto" alt="comment media" />
                ) : media.type === 'video' ? (
                    <video width="300" controls>
                        <source src={media.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : null
            ) : (
                <p>No valid media found or link is not valid.</p>
            )}
            <p>{comment}</p>
        </div>
    );
}
import React from 'react';

export const Comment = ({ user, message }) => {
    
    const getPhoto = (message) => {

        const regexDirect = /^(https?:\/\/.*\.(png|gif|webp|jpeg|jpg)\??.*)/i;
        const regexRedirect = /^(https:\/\/www\.reddit\.com\/media\?url=.*)/i;

        let isItAMatch = message.match(regexDirect);
        if (isItAMatch) {
            console.log("Direct image URL found:", isItAMatch[0]);
            return isItAMatch[0];
        }


        let isItAMatchRedirect = message.match(regexRedirect);
        if (isItAMatchRedirect) {

            const urlParams = new URLSearchParams(isItAMatchRedirect[0].split('?')[1]);
            const extractedUrl = urlParams.get('url');
            if (extractedUrl) {
 
                const decodedUrl = decodeURIComponent(extractedUrl);
                console.log("Extracted and decoded URL:", decodedUrl);
    
                const imageRegex = /^(https?:\/\/.*\.(png|gif|webp|jpeg|jpg)\??.*)/i;
                if (decodedUrl.match(imageRegex)) {
                    return decodedUrl;
                } else {
                    console.warn("Extracted URL is not a direct image link:", decodedUrl);
                }
            } else {
                console.warn("Failed to extract 'url' parameter from the Reddit link:", isItAMatchRedirect[0]);
            }
        }

        console.warn("No valid image URL found in the message.");
        return false;
    }


    const linkPhoto = getPhoto(message);

 
    console.log("Final image URL to be used:", linkPhoto);


    const getMessage = (message, urlPhoto) => {
        if (!urlPhoto) {
            return message; 

        return message.replace(urlPhoto, '').trim();
    }


    const comment = getMessage(message, linkPhoto);

    return (
        <div style={{ flexWrap: "wrap", width: "100%" }}>
            <p><strong>{user}</strong>:</p>
            {linkPhoto ? (
                <img src={linkPhoto} width="100" height="100" alt="comment photo" />
            ) : (
                <p>No image found or link is not valid.</p>
            )}
            <p>{comment}</p>
        </div>
    );
}

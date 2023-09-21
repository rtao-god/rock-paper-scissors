/* import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TelegramRedirectHandler() {
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        const id = queryParams.get('id');
        const firstName = queryParams.get('first_name');
        //... other parameters ...

        if (id && firstName) {
            // User has logged in via Telegram
            // Store user data in state or context
        }
    }, [location]);

    return <div>Processing Telegram login...</div>;
}

export default TelegramRedirectHandler */
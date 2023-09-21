import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function TelegramRedirectHandler() {
    const router = useRouter();

    useEffect(() => {
        // Wait until router object is populated on client side
        if (router.isReady) {
            const { id, first_name: firstName } = router.query;

            if (id && firstName) {
              console.log("lol")
              
            }
        }
    }, [router.isReady, router.query]);

    return <div>Processing Telegram login...</div>;
}

export default TelegramRedirectHandler;

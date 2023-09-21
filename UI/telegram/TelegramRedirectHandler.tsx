import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function TelegramRedirectHandler() {
    const router = useRouter();

    useEffect(() => {
        // Wait until router object is populated on client side
        if (router.isReady) {
            const { id, first_name: firstName } = router.query;

            if (id && firstName) {
                console.log(id, firstName, "hgggggggggggggggggggggggg")
            }
        }
    }, [router.isReady, router.query]);

    return <div> lol </div>
}

export default TelegramRedirectHandler;

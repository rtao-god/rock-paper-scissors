import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function TelegramRedirectHandler() {
    const router = useRouter();

    useEffect(() => {
        // Wait until router object is populated on client side
        if (router.isReady) {
            const { id, first_name: firstName } = router.query;
            console.log(id, firstName, "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd", router.query, router.isReady, router )
            if (id && firstName) {
                console.log(id, firstName, "hggggggggggggggggggggggggfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
            }
        }
    }, [router.isReady, router.query]);

    return <div> lol </div>
}

export default TelegramRedirectHandler;

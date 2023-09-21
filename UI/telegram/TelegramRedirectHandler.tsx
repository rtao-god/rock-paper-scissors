import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function TelegramRedirectHandler() {
    const router = useRouter();

    useEffect(() => {
        const { id, first_name: firstName } = router.query;
        if (id && firstName) {
            console.log(`ID: ${id}, First Name: ${firstName}`);
        }
    }, [router.query]);

    return <div></div>;
}

export default TelegramRedirectHandler;

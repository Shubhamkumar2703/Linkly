import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api/api'

const ShortenUrlPage = () => {
    const { url } = useParams();

    useEffect(() => {
        const redirect = async () => {
            try {
                const { data } = await api.get(
                    `/api/urls/public/redirect/${url}`
                );

                window.location.href = data;
            } catch (error) {
                window.location.href = "/";
            }
        };

        if (url) redirect();
    }, [url]);

    return <p>Redirecting...</p>;
};

export default ShortenUrlPage;

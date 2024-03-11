import md5 from 'md5';
import {useState} from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const password = 'Valantis';
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const auth = md5(`${password}_${timestamp}`);

    const request = async (
        url,
        body = null,
        method = 'POST',
        customHeaders = {
            'X-Auth': auth,
            'Content-Type': 'application/json',
        },
    ) => {
        setLoading(true);

        try {
            const response = await fetch(url, {method, body, headers: customHeaders});

            if (!response.ok) {
                throw new Error(
                    `Не удалось получить данные по адресу ${url}, статус: ${response.status}`,
                );
            }

            const data = await response.json();
            setLoading(false);
            return data.result;
        } catch (error) {
            setLoading(false);
            setError(error.message);
            throw error;
        }
    };

    const clearError = () => setError(null);

    return {loading, error, request, clearError};
};

export default useHttp;

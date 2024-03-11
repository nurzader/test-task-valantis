import useHttp from '../hooks/http.hook';

const useJewelryService = () => {
    const {loading, error, request, clearError} = useHttp();

    const apiUrl = 'https://api.valantis.store:41000/';

    const getIds = async (offset, limit) => {
        const requestBody = {
            action: 'get_ids',
            params: {offset, limit},
        };

        return await request(apiUrl, JSON.stringify(requestBody));
    };

    const getItems = async (ids) => {
        const requestBody = {
            action: 'get_items',
            params: {ids},
        };

        return await request(apiUrl, JSON.stringify(requestBody));
    };

    const filter = async (field) => {
        const requestBody = {
            action: 'filter',
            params: field,
        };

        return await request(apiUrl, JSON.stringify(requestBody));
    };

    return {loading, error, clearError, getIds, getItems, filter};
};

export default useJewelryService;

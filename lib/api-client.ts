export const fetchAbandonmentPublicData = async (params: Record<string, string>) => {
    const baseUrl = 'https://apis.data.go.kr/1543061/abandonmentPublicService_v2';
    const serviceKey = 'JGfgJMUxG7LRicra1+4WOD1AIfFK4UAY+MoGAsXcSc8QOX1mf7dIDgg1zQC8c4OY7cQVVhCCMaeH6ChDITzNfA==';
    const method = '/abandonmentPublic_v2';

    const queryParams = new URLSearchParams({
        serviceKey,
        _type: 'json',
        ...params
    });

    const url = `${baseUrl}${method}?${queryParams.toString()}`;

    console.log('Fetching URL:', url);

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`API call failed with status: ${res.status}`);
    }

    return await res.json();
};

export const sendSize = (body) => {
    return fetch('/api/shoes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
};
const baseUrl = 'http://localhost:3030/jsonstore/ships';

export const getAll = async () => {


    const response = await fetch(baseUrl);

    const result = await response.json();

    const data = Object.values(result);

    return data;

};

export const getOne = async (shipId) => {
    const response = await fetch(`${baseUrl}/${shipId}`);
    const result = await response.json();
    console.log(result);
    return result;
};


export const create = async (data) => {
    const body = {
        name: data.name,
        cruiseLine: data.cruiseLine,
        imageUrl: data.imageUrl,

        additionalInfo: {
            totalGuests: data.totalGuests,
            yearOfBuild: data.yearOfBuild,
            description: data.description

        },
        ownerName: data.ownerName

    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),

    })
    const result = await response.json();


    return result
};

export const edit = (shipId, data) => request.put(`${baseUrl}/${shipId}`, data);


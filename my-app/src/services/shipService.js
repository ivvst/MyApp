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
    // console.log(result);
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

export const edit = (shipId, data) => {
    const url = `${baseUrl}/${shipId}`;
    
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error editing ship data:', error);
        throw error; // Rethrow the error to handle it where the edit function is called
      });
  };

  export const remove = async (shipId) => {
    const response = await fetch(`${baseUrl}/${shipId}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
};
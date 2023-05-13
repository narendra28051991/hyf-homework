import env from '../env.json' assert {type: "json"};

const crudUrl = env.crudURL
const crudToken = env.crudToken

// Create an API for screenshot
export const createImage = async (linkData) => {
    const base = `https://${crudUrl}`;
    const query = `/${crudToken}/screenshot`;

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(linkData)
    }

    try {
        const response = await fetch(base + query, options);
        const data = await response.json();
        return data;
    }
    
    catch (err) {
        console.log(err);
    }
}

// Read all the API screenshot
export const readImage = async () => {
    const base = `https://${crudUrl}`;
    const query = `/${crudToken}/screenshot`;
    
    try {
        const response = await fetch(base + query);
        const data = await response.json();
        console.log(data)
        return data;
    }
    
    catch (err) {
        console.log(err);
    }
}

// Delete API
export const deleteImage = async (id) => {
    const base = `https://${crudUrl}`;
    const query = `/${crudToken}/screenshot/${id}`;

    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        await fetch(base + query, options);
    }
    
    catch (err) {
        console.log(err);
    }
}

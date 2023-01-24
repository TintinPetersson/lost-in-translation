import { createHeaders } from "./ApiIndex";
const apiUrl = process.env.REACT_APP_API_URL;


// read users form api
export const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`);
        if (!response.ok) {
            throw new Error("Could not complete request!");
        }

        const data = await response.json();
        return [null, data];

    } catch (error) {
        return [error.message, []];
    }

}


// Write user to api
export const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        });
        if (!response.ok) {
            throw new Error("Could not create user with username: " + username);
        }

        const data = await response.json();
        return [null, data];

    } catch (error) {
        return [error.message, []];
    }
}


// Check if user exist!
export const loginUser = async (username) => {
    // Check if user does exist
    const [checkError, user] = await checkForUser(username);

    if (checkError !== null) {
        return [checkError, null];
    }

    if (user.length > 0) {
        return [null, user.pop()];
    }

    return await createUser(username);
}

export const translationAdd = async (user, translation) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })

        if (!response.ok) {
            throw new Error("Could not add the translation")
        }

        const result = await response.json()
        return [null, result]

    } catch (error) {
        return [error.message, null]
    }

}

export const translationClear = async (userId) => {

}
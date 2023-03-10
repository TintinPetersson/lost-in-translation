import { createHeaders } from "./ApiIndex";
const apiUrl = process.env.REACT_APP_API_URL;

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

export const loginUser = async (username) => {
    
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
    
    if (user.translations.length >= 10) {
        user.translations.shift()
    }
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

export const translationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        const result = await response.json()
        if (!response.ok) {
            throw new Error("Could not update translations.")
        }
        return [null, result]

    } catch (error) {
        return [error.message, null]
    }
}

export const findUserById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`)
        if (!response.ok) {
            throw new Error("Could not fet user")
        }
        const user = await response.json()
        return [null, user]

    } catch (error) {
        return [error.message, null]
    }
}
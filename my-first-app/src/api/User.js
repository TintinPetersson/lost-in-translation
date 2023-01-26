import { createHeaders } from "./ApiIndex";
const apiUrl = process.env.REACT_APP_API_URL;


// function check if the user exist in the API, the function returns
// the users data if user exist and null otherwise
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


// function adds user to api
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

// handles the logic for user login
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

// Adds new translations to the API and removes the oldest translation form the API if  
// user enter more then 10 translations
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

// Removes all translations stored on a user in the API
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

// Gets a specific user from the API based on the user ID
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
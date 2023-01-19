const apiUrl = process.env.REACT_APP_API_URL;
import { createHeaders } from "./ApiIndex";


// read form api
export const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`, {
            method: "POST",
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        });
        if (!response.ok) {
            throw new Error("Could not complete request!");
        }

        const data = await response.json();
        return [null, data];

    } catch (error) {
        return [error.message, []];
    }

}


// Write to api
export const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Could not create user with username: " + username);
        }

        const data = await response.json();
        return [null, data];

    } catch (error) {
        return [error.message, []];
    }
}


// check if user exist!
export const loginUser = async (username) => {
    // chack if user does exist
    const [checkError, user] = await checkForUser(username);

    if (checkError !== null) {
        return [checkError, null];
    }

    if (username.length > 0) {
        return [null, user.pop()];
    }

    return await createUser(username);
}
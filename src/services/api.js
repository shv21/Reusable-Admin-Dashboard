const BASE_URL= "https://json-placeholder.mock.beeceptor.com";

export async function getUsers() {
    const respons = await fetch(`${BASE_URL}/users`)

    if (!respons.ok) {
        throw new Error("Failed to fetch users")
    }

    return respons.json();

}

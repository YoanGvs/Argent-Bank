const URL_LOGIN = 'http://localhost:3001/api/v1/user/login'
const URL_USER = 'http://localhost:3001/api/v1/user/profile'

export const login = (data) =>
    fetch(URL_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then((response) => {
        if (!response.ok) {
            return response.json().then((errorResponse) => {
                console.error(
                    'Erreur lors de la requÃªte1:',
                    errorResponse.message
                )
                throw errorResponse
            })
        }
        return response.json()
    })

export const getUser = (token) =>
    fetch(URL_USER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => response.json())

export const updateUsername = async (token, newUsername) => {
    const response = await fetch(URL_USER, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: newUsername }),
    })

    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
            errorData.message ||
                "Une erreur est survenue lors de la mise à jour du nom d'utilisateur."
        )
    }

    return await response.json()
}

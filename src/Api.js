const baseUri = "http://localhost:5678/api"

export const getWorks = async () => {
    const request = await fetch(`${baseUri}/works`);
    const works = await request.json()

    return works
}

export const getCategories = async () => {
    const request = await fetch(`${baseUri}/categories`);
    const categories = await request.json()

    return categories
}

export const deleteWork = async (id) => {
    const request = await fetch(`${baseUri}/works/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })
}

export const addWork = async (formData) => {
    const response = await fetch(`${baseUri}/works`, {
        method: "POST",
        headers: { Authorization: "Bearer " + localStorage.getItem('token') },
        body: formData
    })

    if (response.status == 201) {
        return true
    }

    alert('Erreur lors de l\'ajout')
    return false
}
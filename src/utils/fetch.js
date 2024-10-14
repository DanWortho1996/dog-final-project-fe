export const allUsersFetch = async () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    try {
        const response = await fetch(`${baseURL}/users/allusers`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            console.log("error");
        }
        const data = await response.json();
        console.log("allusers", data);
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
};
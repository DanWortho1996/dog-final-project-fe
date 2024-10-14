export const allUsersFetch = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/allusers`, {
            method: "GET",
            mode: "cors",
            headers: {
                "content-Type": "application/json",
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
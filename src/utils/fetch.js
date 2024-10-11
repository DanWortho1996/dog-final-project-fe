export const allUsersFetch = async () => {
    try {
        const response = await fetch("http://localhost:5001/.netlify/functions/api/users/allusers", {
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
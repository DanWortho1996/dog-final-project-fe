
export const signupFetch = async (username, email, password) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/signup`, {
        method: "POST", 
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email, 
          password: password,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Signup failed: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("data in signupFetch:", data);
  
      return data;
  
    } catch (error) {
      console.log(error);
      alert("ERROR! PLEASE check the console.");
    }
  };
  
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

export const updateUserFetch = async (username, newEmail) => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  try{
    const response = await fetch(`${baseURL}/users/updateuser`, {
      method: "PUT",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        newEmail: newEmail, 
        
      }),
  });
  if (!response.ok) {
      console.log("error");
  }
  const data = await response.json();
  console.log("updateuser", data);
  return data;
} catch (error) {
  console.log("Error:", error);
}
  };
 

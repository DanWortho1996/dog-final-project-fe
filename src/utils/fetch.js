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
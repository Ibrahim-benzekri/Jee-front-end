import { useState, useEffect } from "react";

function useConnection() {
  const jwt = localStorage.getItem("customer_jwt");
  const [isValid, setIsValid] = useState(null);

  const testConnexion = async ()=>{
    try {
      const requestOptions = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
      };

      const response = await fetch(`http://localhost:8081/api/v1/form/verify?token=${jwt}`, requestOptions);
      if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
      }
      const data = await response.json();
      if(data.active === false){
        setIsValid(false);
      }else{
        setIsValid(true);
      }
  } catch (error) {
  }
  }

  useEffect(() => {
    if (jwt && jwt !== "") {
      testConnexion();
    } else {
      setIsValid(false);
    }
  }, [jwt]); 

  return isValid;
}

export { useConnection };

export const signUp = async (email, password, firstname, lastname, address,phoneNumber) => {
  const url = "http://localhost:8080/owner/register";
  let request = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      firstname,
      lastname,
      address,
      phoneNumber,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data =  await request.json();
  if(data.Authorization){
    localStorage.setItem("user", JSON.stringify(data))
  }
  return data;
};

export const login = async(email, password) =>{
  const url = `http://localhost:8080/auth/login?email=${email}&password=${password}`;
  let request = await fetch (url,{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    }
  })
  const data = await request.json();
  console.log(data);
  if(data.Authorization){
    localStorage.setItem("user", JSON.stringify(data))
  }
  return data;
}

export const logout =()=>{
  return JSON.parse(localStorage.removeItem("user"))
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"))
}


export const petRegister = async (name, high, weight, species, breed, id) => {
  const url = "http://localhost:8080/pet/save";
  let request = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name,
      high,
      weight,
      species,
      breed,
      owner: {
        id
    }
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data =  await request.json();
  if(data.Authorization){
    localStorage.setItem("user", JSON.stringify(data))
  }
  return data;
};






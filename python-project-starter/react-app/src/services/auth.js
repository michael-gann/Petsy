<<<<<<< HEAD
export const authenticate = async () => {
  const response = await fetch('/api/auth/', {
=======
export const authenticate = async() => {
  const response = await fetch('/api/auth/',{
>>>>>>> db-models
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return await response.json();
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};


<<<<<<< HEAD
export const signUp = async (firstName, lastName, email, password) => {
=======
export const signUp = async (username, email, password) => {
>>>>>>> db-models
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
<<<<<<< HEAD
      firstName,
      lastName,
=======
      username,
>>>>>>> db-models
      email,
      password,
    }),
  });
  return await response.json();
<<<<<<< HEAD
}
=======
}
>>>>>>> db-models

function makeUsersService() {
  const baseUrl = '/api/users';
  const headers = {
    'Content-Type': 'application/json'
  };
  async function getUsers(page, limit = 5) {
    let url = `${baseUrl}?page=${page}&limit=${limit}`;
    return await fetch(url).then((res) => res.json());
  }
  async function createUser(user) {
    return await fetch(baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    }).then((res) => res.json());
  }
  async function deleteAllUsers() {
    return await fetch(baseUrl, {
      method: 'DELETE'
    }).then((res) => res.json());
  }
  async function getUser(id) {
    return await fetch(`${baseUrl}/${id}`).then((res) => res.json());
  }
  async function updateUser(id, user) {
    return await fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(user)
    }).then((res) => res.json());
  }
  async function deleteUser(id) {
    return await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE'
    }).then((res) => res.json());
  }

  // Login
  async function loginUser(credentials) {
    return await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then((res) => res.json());
  }

  return {
    getUsers,
    deleteAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
  };
}
export default makeUsersService();

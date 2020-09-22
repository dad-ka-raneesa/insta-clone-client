const optionsForGet = () => {
  return {
    headers: { 'Content-Type': 'application/json' },
  };
};

const optionsForPost = (body, headers) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  };
  return {
    headers: {
      ...defaultHeaders,
      ...headers
    },
    body: JSON.stringify(body),
    method: 'POST',
  };
};

const getOptions = (body, method, headers) => {
  if (method === 'GET') return optionsForGet();
  return optionsForPost(body, headers);
};

const fetchReq = async (url, body, method = 'GET', headers) => {
  const res = await fetch(url, getOptions(body, method, headers));
  return await res.json();
};

const apiCall = (action) => {
  switch (action.type) {
    case 'SIGNUP':
      return fetchReq('/signup', action.body, 'POST');
    case 'SIGNIN':
      return fetchReq('/signin', action.body, 'POST');
    case 'CREATE_POST':
      return fetchReq('/createPost', action.body, 'POST', action.headers);
    default:
      return new Promise((resolve, reject) => reject());
  }
};

export default apiCall;

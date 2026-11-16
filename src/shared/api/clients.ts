export const apiClient = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('access_token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };

  const response = await fetch(url, { ...options, headers });
  
  if (response.status === 401) {

    localStorage.removeItem('access_token');
    window.location.href = '/login';
  }

  return response;
};
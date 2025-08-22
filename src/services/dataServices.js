const BASE_URL = "/data";

// In-memory cache object
const cache = {};

/**
 * Generic fetcher for any JSON file in /public/data with caching
 */

const fetchJSON = async (filename) => {
  // If already in cache, return immediately
  if (cache[filename]) {
    console.log(`Returning cached data for: ${filename}`);
    return cache[filename];
  }

  try {
    console.log(`Fetching from server: ${filename}`);
    const response = await fetch(`${BASE_URL}/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}: ${response.status}`);
    }

    const data = await response.json();
    cache[filename] = data; // Store in cache
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Specific fetch functions
export const getSectors = () => fetchJSON("sectors.json");

export const getServices = () => fetchJSON("services.json");

export const getFormData = () => fetchJSON("form.json");

export const getClientsData = () => fetchJSON("clients.json");
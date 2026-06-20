'use strict';

/**
 * Realiza una petición fetch a la URL indicada y devuelve un objeto con el resultado JSON.
 * @param {string} url - La URL del recurso JSON.
 * @returns {Promise<{success: boolean, body: any}>} Resultado de la petición.
 */
const fetchProducts = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return {
        success: true,
        body: data,
      };
    })
    .catch((error) => {
      return {
        success: false,
        body: error.message,
      };
    });
};

/**
 * Realiza una petición fetch a la URL indicada y devuelve el XML parseado.
 * @param {string} url - La URL del recurso XML.
 * @returns {Promise<{success: boolean, body: Document}|{success: boolean, body: string}>}
 */
let fetchCategories = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const text = await response.text();
    const parser = new DOMParser();
    const data = parser.parseFromString(text, 'application/xml');

    return {
      success: true,
      body: data,
    };
  } catch (error) {
    return {
      success: false,
      body: error.message,
    };
  }
};

export { fetchProducts, fetchCategories };

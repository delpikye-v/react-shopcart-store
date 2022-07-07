function get(key, defaultValue, { useJSONParse = true } = {}) {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  try {
    const value = localStorage.getItem(key);
    const valueWithDefaultFallback = value === null ? defaultValue : value;

    if (!useJSONParse) return valueWithDefaultFallback;

    return value === null ? valueWithDefaultFallback : JSON.parse(value);
  } catch {
    return defaultValue;
  }
}

function set(key, value, { useJSONStringify = true } = {}) {
  try {
    const normalizedValue = useJSONStringify ? JSON.stringify(value) : value;
    localStorage.setItem(key, normalizedValue);
    return true;
  } catch {
    return false;
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

function clear() {
  try {
    localStorage.clear();
    return true;
  } catch {
    return false;
  }
}

export const LocalStorage = {
  get,
  set,
  remove,
  clear,
};

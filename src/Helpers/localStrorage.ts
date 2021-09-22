// localStorage.js
export const loadState = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (key, value) => {
    if (key) {
      try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
      } catch {
        // ignore write errors
      }
    }
  };
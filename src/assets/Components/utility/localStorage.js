const getBooks = () => {
    const storageBooks = localStorage.getItem('Reading-Books');
    if (storageBooks) {
      return JSON.parse(storageBooks);
    }
    return [];
  };
  
  const storeBook = (id) => {
    const storageBooks = getBooks();
    const exist = storageBooks.find((dataId) => dataId === id);
    if (!exist) {
      storageBooks.push(id);
      localStorage.setItem('Reading-Books', JSON.stringify(storageBooks));
    }
  };
  
  export { getBooks, storeBook };
  
const wishgetBooks = () => {
    const wishstorageBooks = localStorage.getItem('Wish-Books');
    if (wishstorageBooks) {
      return JSON.parse(wishstorageBooks);
    }
    return [];
  };
  
  const wishstoreBook = (id) => {
    const wishstorageBooks = wishgetBooks();
    const exist = wishstorageBooks.find((dataId) => dataId === id);
    if (!exist) {
      wishstorageBooks.push(id);
      localStorage.setItem('Wish-Books', JSON.stringify(wishstorageBooks));
    }
  };
  
  export { wishgetBooks, wishstoreBook };
  
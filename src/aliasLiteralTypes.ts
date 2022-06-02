(() => {
  type UserID = string | number | boolean;
  let userID: UserID;

  //litearl types
  type Sizes = 'S' | 'M' | 'XL' | 'L';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  const grettings = (id: UserID, size?: Sizes) => {
    if (typeof id === 'string')
      console.log(`esto es un String ${id.toLowerCase()}`);
  };
  grettings((userID = 'LICHA'), shirtSize);
})();

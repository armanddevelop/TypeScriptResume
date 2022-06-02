(() => {
  let userID: string | number;
  userID = 'alicha';
  userID = 5131;
  const grettings = (myText: string | number) => {
    typeof myText === 'string'
      ? console.log(`esto es un String ${myText.toLowerCase()}`)
      : console.log(`number is ${myText.toFixed(2)}`);
  };
  grettings('chicha');
  grettings(588.2652356461);
})();

(() => {
  //let myNumber: number;
  //let myString: number;
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  let myNumber: number | null;
  let myString: string | undefined;

  const salute = (name: string | null) => {
    !name
      ? console.log(`Hi ${name}`)
      : console.log(`Hello ${name.toUpperCase()}!!!`);
  };
  salute(null);
  salute('Chucek');

  const saluteV2 = (name: string | null) => {
    let hello = 'Hello';
    hello += name?.toUpperCase() || ' nobody';
    console.log(hello);
  };
  saluteV2(' chueck');
  saluteV2(null);
})();

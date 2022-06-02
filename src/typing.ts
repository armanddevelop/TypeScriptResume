interface user {
  name: string;
  age: number;
  address: string;
  job?: string;
}

const infoUser: user = {
  name: 'alicha',
  age: 20,
  address: '',
};
console.log(infoUser);
(() => {
  const price: number = 2000;
})();

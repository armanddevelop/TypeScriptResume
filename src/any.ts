(() => {
  let dynamicVar: any;
  dynamicVar = 'hola';
  dynamicVar = {};
  dynamicVar = 1264;
  dynamicVar = 'ehuche';
  /*Casts*/
  const rta = (dynamicVar as string).toLocaleUpperCase();
  console.log('esto vale rta ', rta);
  dynamicVar = 5461.26464;
  const rta2 = (<number>dynamicVar).toFixed();
  console.log('esto vale rta2 ', rta2);
})();

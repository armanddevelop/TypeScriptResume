const intToBinari = (num: number) => {
  if (num <= 1) return num;
  const binariResult: number[] = [];
  let rest = num;
  while (Math.floor(rest) !== 0) {
    let mod = rest % 2;
    if (Math.floor(mod) === 0 || Math.floor(mod) === 1) {
      binariResult.unshift(Math.floor(mod));
      rest = rest / 2;
    } else {
      rest = rest / 2;
    }
  }

  return binariResult;
};

const result = intToBinari(82);
console.log('esto vale result ', result);

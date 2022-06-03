import _ from 'lodash';

const data = [
  {
    userName: 'alicha',
    role: 'admin',
  },
  {
    userName: 'nallely',
    role: 'seller',
  },
  {
    userName: 'chich',
    role: 'seller',
  },
  {
    userName: 'chue',
    role: 'costumer',
  },
];

const resp = _.groupBy(data, ({ role }) => role);

const result = data.reduce((acc, currentValue) => {
  if (currentValue.role === 'seller') {
    acc.push(currentValue);
  }
  return acc;
}, <object[]>[]);

console.log('esto vale result ', result);
console.log('esto vale resp ', resp);

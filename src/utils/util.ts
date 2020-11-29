// 泛型的应用

// 数组转对象
const arrToObj = <T extends { id?: string }>(arr: Array<T>) => {
  return arr.reduce((acc, cur) => {
    if (cur.id) {
      acc[cur.id] = cur;
    }
    return acc;
  }, {} as { [key: string]: T });
};

interface TestProp {
  id: string;
  name: string;
  age?: number;
}
const data: TestProp[] = [
  { id: '1', name: '12' },
  { id: '2', name: '12' }
];

const res = arrToObj(data);
console.log(res);

// 对象转数组
const objToArr = <T>(obj: { [key: string]: T }) => {
  return Object.keys(obj).map(key => obj[key]);
};

const testData: { [key: string]: TestProp } = {
  '1': { id: '1', name: '12' },
  '2': { id: '2', name: '12', age: 12 }
};

const res2 = objToArr(testData);
console.log(res2);

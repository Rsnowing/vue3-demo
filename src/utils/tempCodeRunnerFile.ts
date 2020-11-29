export const arrToObj = <T extends { id?: string }>(arr: Array<T>) => {
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
}
const data: TestProp[] = [
  { id: '1', name: '12' },
  { id: '2', name: '12' }
];

const res = arrToObj(data);
console.log(res);

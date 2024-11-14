export function getId(arr) {
  let id = arr[arr.length - 1].id;
  return (id += 1);
}

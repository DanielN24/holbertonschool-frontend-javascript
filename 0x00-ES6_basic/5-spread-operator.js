export default function concatArrays(array1, array2, string) {
  console.log(array1.concat(...array2, ...string));
}

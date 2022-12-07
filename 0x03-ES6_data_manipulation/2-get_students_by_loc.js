export default function getStudentsByLocation(arr, city) {
  return arr.filter((attribute) => attribute.location === city);
}

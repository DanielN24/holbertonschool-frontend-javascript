export default function getListStudentIds(ids) {
  if (!Array.isArray(ids)) {
    return [];
  }
  return ids.map((attribute) => attribute.id);
}

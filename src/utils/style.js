export function getBorderStyle(index) {
  switch (index) {
    case 0:
      return 'borderTopLeftRadius';
    case 1:
      return 'borderTopRightRadius';
    case 2:
      return 'borderBottomLeftRadius';
    default:
      return 'borderBottomRightRadius';
  }
}

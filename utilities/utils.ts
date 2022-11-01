export const filterArrayByText = <T extends { name: string }>(array: Array<T>, text: string): Array<T> => array.filter(
  item =>
    !text ||
    item.name
      .toLowerCase()
      .includes(text.toLowerCase())
);
export function addNewArrayItemImmutable(values: any[], newValue: any) {
  return values.concat(newValue);
}

export function updateArrayItemImmutable(values: any[], updateIndex: number, newItem) {
  return [
    ...values.slice(0, updateIndex),
    newItem,
    ...values.slice(updateIndex + 1)
  ];
}

export function removeArrayItemImmutable(values: any[], removeIndex: number) {
  return [
    ...values.slice(0, removeIndex),
    ...values.slice(removeIndex + 1)
  ];
}

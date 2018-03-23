export function addNewArrayItemImmutable(values: any[], newValue: any) {
  return values ? values.concat(newValue) : null;
}

export function updateArrayItemImmutable(values: any[], updateIndex: number, newItem) {
  if (!isArrayIndexValid(values, updateIndex)) {
    return values;
  }

  return [
    ...values.slice(0, updateIndex),
    newItem,
    ...values.slice(updateIndex + 1)
  ];
}

export function removeArrayItemImmutable(values: any[], removeIndex: number) {
  if (!isArrayIndexValid(values, removeIndex)) {
    return values;
  }

  return [
    ...values.slice(0, removeIndex),
    ...values.slice(removeIndex + 1)
  ];
}

export function isArrayIndexValid(values: any[], index: number) {
  return Array.isArray(values) && index >= 0 && index < values.length;
}

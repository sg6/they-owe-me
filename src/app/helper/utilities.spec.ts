import {
  addNewArrayItemImmutable, createNewId, getArrayItem, isArrayIndexValid, removeArrayItemImmutable,
  updateArrayItemImmutable
} from './utilities';

describe('utilities', () => {
  let values;
  beforeEach(() => {
    values = [1, 2];
  });

  const createIndexFunc = (valueToFind) => {
    return (value) => value === valueToFind;
  };

  describe('addNewArrayItemImmutable', () => {
    it('should do nothing when old array is undefined', () => {
      expect(addNewArrayItemImmutable(null, 1)).toEqual(null);
    });

    it('should not modify old array', () => {
      addNewArrayItemImmutable(values, 3);
      expect(values).toEqual([1, 2]);
    });

    it('should append item', () => {
      expect(addNewArrayItemImmutable(values, 3)).toEqual([1, 2, 3]);
    });
  });

  describe('updateArrayItemImmutable', () => {
    it('should do nothing when old array is undefined', () => {
      expect(updateArrayItemImmutable(null, 1, createIndexFunc(1))).toEqual(null);
    });

    it('should not modify old array', () => {
      updateArrayItemImmutable(values, 3, createIndexFunc(1));
      expect(values).toEqual([1, 2]);
    });

    it('should update value', () => {
      expect(updateArrayItemImmutable(values, 3, createIndexFunc(1))).toEqual([3, 2]);
    });
  });

  describe('removeArrayItemImmutable', () => {
    it('should do nothing when old array is undefined', () => {
      expect(removeArrayItemImmutable(null, createIndexFunc(1))).toEqual(null);
    });

    it('should not modify old array', () => {
      removeArrayItemImmutable(values, createIndexFunc(1));
      expect(values).toEqual([1, 2]);
    });

    it('should remove value', () => {
      expect(removeArrayItemImmutable(values, createIndexFunc(1))).toEqual([2]);
    });
  });

  describe('isArrayIndexValid', () => {
    it('should return false when array is undefined', () => {
      expect(isArrayIndexValid(null, 1)).toBeFalsy();
    });

    it('should return false when index is lesser than zero', () => {
      expect(isArrayIndexValid(values, -1)).toBeFalsy();
    });

    it('should return false when index is greater than length', () => {
      expect(isArrayIndexValid([], 1)).toBeFalsy();
    });

    it('should return true when index is valid', () => {
      expect(isArrayIndexValid(values, 1)).toBeTruthy();
    });
  });

  describe('getArrayItem', () => {
    it('should return undefined if indexFunc does not find anything', () => {
      expect(getArrayItem(values, createIndexFunc(4))).toBeUndefined();
    });

    it('should return value', () => {
      expect(getArrayItem(values, createIndexFunc(1))).toBe(1);
    });
  });

  describe('createNewId', () => {
    it('should return 1 on empty array', () => {
      expect(createNewId([])).toBe(1);
    });

    it('should return 3', () => {
      const test = [{id: 1}, {id: 2}];
      expect(createNewId(test)).toBe(3);
    });
  });
});

import {addNewArrayItemImmutable, isArrayIndexValid, removeArrayItemImmutable, updateArrayItemImmutable} from './utilities';

describe('utilities', () => {
  let values;
  beforeEach(() => {
    values = [1, 2];
  });

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
      expect(updateArrayItemImmutable(null, 1, 1)).toEqual(null);
    });

    it('should do nothing when updateIndex is lesser than zero', () => {
      expect(updateArrayItemImmutable(values, -1, 1)).toEqual(values);
    });

    it('should do nothing when updateIndex is greater than length', () => {
      expect(updateArrayItemImmutable([], 1, 1)).toEqual([]);
    });

    it('should not modify old array', () => {
      updateArrayItemImmutable(values, 1, 3);
      expect(values).toEqual([1, 2]);
    });

    it('should update value', () => {
      expect(updateArrayItemImmutable(values, 1, 3)).toEqual([1, 3]);
    });
  });

  describe('removeArrayItemImmutable', () => {
    it('should do nothing when old array is undefined', () => {
      expect(removeArrayItemImmutable(null, 1)).toEqual(null);
    });

    it('should do nothing when updateIndex is lesser than zero', () => {
      expect(removeArrayItemImmutable(values, -1)).toEqual(values);
    });

    it('should do nothing when updateIndex is greater than length', () => {
      expect(removeArrayItemImmutable([], 1)).toEqual([]);
    });

    it('should not modify old array', () => {
      removeArrayItemImmutable(values, 1);
      expect(values).toEqual([1, 2]);
    });

    it('should remove value', () => {
      expect(removeArrayItemImmutable(values, 1)).toEqual([1]);
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
});

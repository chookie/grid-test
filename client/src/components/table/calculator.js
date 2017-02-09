'use strict';

export function calculateSum(values) {
  const sum = values.reduce((a, b) => a + b, 0);
  return sum;
}

export function calculateSumOfProperty(objectArray, propertyFunction) {
  const values = Array.from(objectArray, propertyFunction);
  return calculateSum(values);
}

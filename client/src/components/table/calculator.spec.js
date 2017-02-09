'use strict';

import chai from 'chai';
// const expect = chai.expect();
import {calculateSum, calculateSumOfProperty} from './calculator';

chai.should();

describe('calculatorTests', function () {
  describe('sum', function () {
    it('calculateSum sums numbers correctly', () => {
      const values = [2, 4, 6, 8];

      const sum = calculateSum(values);

      sum.should.equal(20);
    });

    it('calculateSumOfProperty numbers correctly', () => {
      const list = [
        {id:'id1',num:1},
        {id:'id1',num:2}
      ];
      const values = Array.from(list, (obj) => obj.num);

      const sum = calculateSumOfProperty(values);

      sum.should.equal(3);
    });

    it('extract from object', () => {
      const list = [
        {id:'id1',num:1},
        {id:'id1',num:2}
      ];
      const values = Array.from(list, (obj) => obj.num);

      const sum = calculateSum(values);

      sum.should.equal(3);
    });

  });
});

import assert from 'assert';
import { isTextFieldValid } from '../src';
import { INPUT_FIELD_TYPES } from '../../binary-ui-components/src/components/Input';

describe('isTextFieldValid', () => {
  describe(`${INPUT_FIELD_TYPES.TEXT}`, () => {
    it('value undefined is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.TEXT), true);
    });
    it('value empty is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.TEXT, ''), true);
    });
    it('value defined is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.TEXT, 'text'), true);
    });
  });

  describe(`${INPUT_FIELD_TYPES.NUMBER}`, () => {
    it('value undefined is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.NUMBER), true);
    });
    it('value empty is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.NUMBER, ''), true);
    });
    it('value defined is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.NUMBER, 'text'), true);
    });
  });

  describe(`${INPUT_FIELD_TYPES.PASSWORD}`, () => {
    it('value undefined is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.PASSWORD), true);
    });
    it('value empty is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.PASSWORD, ''), true);
    });
    it('value defined is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.PASSWORD, 'text'), true);
    });
  });

  describe(`${INPUT_FIELD_TYPES.EMAIL}`, () => {
    it('value undefined is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.EMAIL), false);
    });
    it('value empty is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.EMAIL, ''), false);
    });
    it('value defined is correct - text', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.EMAIL, 'text'), false);
    });
    it('value defined is correct - email', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.EMAIL, 'email@gmail.com'), true);
    });
  });

  describe(`${INPUT_FIELD_TYPES.TEL}`, () => {
    it('value undefined is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.TEL), true);
    });
    it('value empty is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.TEL, ''), true);
    });
    it('value defined is correct - text', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.TEL, 'text'), true);
    });
    it('value 777 is correct - number', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.TEL, '777'), true);
    });
    it('value defined is correct - number', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.TEL, '+10123456789'), true);
    });
  });

  describe(`${INPUT_FIELD_TYPES.LINK}`, () => {
    it('value undefined is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.LINK), false);
    });
    it('value empty is correct', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.LINK, ''), false);
    });
    it('value defined is correct - text', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.LINK, 'text'), false);
    });
    it('value defined is correct - url with text', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.LINK, 'http://github.com foo bar'), false);
    });
    it('value defined is correct - url', () => {
      assert.equal(isTextFieldValid(INPUT_FIELD_TYPES.LINK, 'http://github.com'), true);
    });
  });
});

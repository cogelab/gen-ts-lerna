import {expect} from '@tib/testlab';
import {Template} from 'coge-generator';
import AppTemplate = require('../app');

describe('ts-lerna/app', () => {
  it('should be a template', () => {
    expect(new AppTemplate({})).instanceOf(Template);
  });
});

import { FirstnameLastnamePipe } from './firstname-lastname.pipe';
import { TestBed, async } from '@angular/core/testing';

describe('FirstnameLastnamePipe', () => {
  let pipe: FirstnameLastnamePipe;

  beforeEach(() => {
    pipe = new FirstnameLastnamePipe();
  });

  it('create an instance', async(() => {
    expect(pipe).toBeTruthy();
  }));

});

import { FirstnameLastnamePipe } from '../app/_shared/ui/firstname-lastname.pipe';
import { TestBed, async } from '@angular/core/testing';

describe('FirstnameLastnamePipe', () => {
  let pipe: FirstnameLastnamePipe;

  beforeEach(() => {
    pipe = new FirstnameLastnamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('with empty, should return empty', async(() => {
    const result = pipe.transform('');
    expect(result).toEqual('');
  }));

  it('with null, should return empty', async(() => {
    const result = pipe.transform(null);
    expect(result).toEqual('');
  }));

  it('with "Bla", should return "Bla"', async(() => {
    const result = pipe.transform('Bla');
    expect(result).toEqual('Bla');
  }));

  it('with "Bla Bla Bla", should return "Bla Bla"', async(() => {
    const result = pipe.transform('Bla Bla Bla');
    expect(result).toEqual('Bla Bla');
  }));
});

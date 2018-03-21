import { FirstnameLastnamePipe } from './firstname-lastname.pipe';

describe('FirstnameLastnamePipe', () => {
  it('create an instance', () => {
    const pipe = new FirstnameLastnamePipe();
    expect(pipe).toBeTruthy();
  });
});

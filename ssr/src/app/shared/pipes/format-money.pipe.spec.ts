import { FormatMoneyPipe } from './format-money.pipe';

describe('FormatMoneyPipe', () => {
  const pipe = new FormatMoneyPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should tranform the number to format', () => {
    const value = 25.2564

    const result = pipe.transform(value)
    expect(result).toBe('$25.26');
  });

  it('add 00 after .', () => {
    const value = 10;

    const result = pipe.transform(value);

    expect(result).toBe('$10.00')
  })

  it('show 2 decimals', () => {
    const value = 152.2515451518;

    const result = pipe.transform(value);

    expect(result).toBe('$152.25')
  })
});

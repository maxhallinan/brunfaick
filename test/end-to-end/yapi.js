const assert = require('chai').assert;
const brunfaick = require('../../.');

describe('end-to-end > yapi.b', () => {
  it('Should return the expected output.', () => {
    const program = `
    [ yet another pi calculation program in bf

      Just like for pi16.b the accuracy of the result depends on the cellsize:
      
       - using  8 bit cells causes an overflow after 4 digits
       - using 16 bit cells causes an overflow after 537 digits
       - using 32 bit cells causes an overflow after several millions of digits
       
      It's about ~38 times shorter than pi16.b, ~364 times faster and works with
      not-wrapping (bignum) implementations. 
      
      by Felix Nawothnig (felix.nawothnig@t-online.de) ]

    >  +++++ +++++ +++++ (15 digits)

    [<+>>>>>>>>++++++++++<<<<<<<-]>+++++[<+++++++++>-]+>>>>>>+[<<+++[>>[-<]<[>]<-]>>
    [>+>]<[<]>]>[[->>>>+<<<<]>>>+++>-]<[<<<<]<<<<<<<<+[->>>>>>>>>>>>[<+[->>>>+<<<<]>
    >>>>]<<<<[>>>>>[<<<<+>>>>-]<<<<<-[<<++++++++++>>-]>>>[<<[<+<<+>>>-]<[>+<-]<++<<+
    >>>>>>-]<<[-]<<-<[->>+<-[>>>]>[[<+>-]>+>>]<<<<<]>[-]>+<<<-[>>+<<-]<]<<<<+>>>>>>>
    >[-]>[<<<+>>>-]<<++++++++++<[->>+<-[>>>]>[[<+>-]>+>>]<<<<<]>[-]>+>[<<+<+>>>-]<<<
    <+<+>>[-[-[-[-[-[-[-[-[-<->[-<+<->>]]]]]]]]]]<[+++++[<<<++++++++<++++++++>>>>-]<
    <<<+<->>>>[>+<<<+++++++++<->>>-]<<<<<[>>+<<-]+<[->-<]>[>>.<<<<[+.[-]]>>-]>[>>.<<
    -]>[-]>[-]>>>[>>[<<<<<<<<+>>>>>>>>-]<<-]]>>[-]<<<[-]<<<<<<<<]++++++++++.
    `;

    const output = brunfaick(program);

    const expected = '3.14070455282885\n';

    assert.strictEqual(expected, output);
  });
});

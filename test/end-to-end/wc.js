const assert = require('chai').assert;
const brunfaick = require('../../.');

describe('end-to-end > wc.b', () => {
  it('Should return the expected output', () => {
    const program = `
    >>>+>>>>>+>>+>>+[<<],[
        -[-[-[-[-[-[-[-[<+>-[>+<-[>-<-[-[-[<++[<++++++>-]<
            [>>[-<]<[>]<-]>>[<+>-[<->[-]]]]]]]]]]]]]]]]
        <[-<<[-]+>]<<[>>>>>>+<<<<<<-]>[>]>>>>>>>+>[
            <+[
                >+++++++++<-[>-<-]++>[<+++++++>-[<->-]+[+>>>>>>]]
                <[>+<-]>[>>>>>++>[-]]+<
            ]>[-<<<<<<]>>>>
        ],
    ]+<++>>>[[+++++>>>>>>]<+>+[[<++++++++>-]<.<<<<<]>>>>>>>>]
    [Counts lines, words, bytes. Assumes no-change-on-EOF or EOF->0.
    Daniel B Cristofani (cristofdathevanetdotcom)
    http://www.hevanet.com/cristofd/brainfuck/]
    `;

    const input = 'foo bar baz \n foo bar baz \n foo bar baz';

    const output = brunfaick(program, input);

    const expected = '\t2\t9\t39\n';

    assert.strictEqual(expected, output);
  });
});

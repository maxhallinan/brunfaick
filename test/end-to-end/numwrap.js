const test = require('ava');
const brunfaick = require('../../.');

test('Outputs the numwrap ascii art.', t => {
  const program = `
    >>>>+>+++>+++>>>>>+++[
      >,+>++++[>++++<-]>[<<[-[->]]>[<]>-]<<[
        >+>+>>+>+[<<<<]<+>>[+<]<[>]>+[[>>>]>>+[<<<<]>-]+<+>>>-[
          <<+[>]>>+<<<+<+<--------[
            <<-<<+[>]>+<<-<<-[
              <<<+<-[>>]<-<-<<<-<----[
                <<<->>>>+<-[
                  <<<+[>]>+<<+<-<-[
                    <<+<-<+[>>]<+<<<<+<-[
                      <<-[>]>>-<<<-<-<-[
                        <<<+<-[>>]<+<<<+<+<-[
                          <<<<+[>]<-<<-[
                            <<+[>]>>-<<<<-<-[
                              >>>>>+<-<<<+<-[
                                >>+<<-[
                                  <<-<-[>]>+<<-<-<-[
                                    <<+<+[>]<+<+<-[
                                      >>-<-<-[
                                        <<-[>]<+<++++[<-------->-]++<[
                                          <<+[>]>>-<-<<<<-[
                                            <<-<<->>>>-[
                                              <<<<+[>]>+<<<<-[
                                                <<+<<-[>>]<+<<<<<-[
                                                  >>>>-<<<-<-
      ]]]]]]]]]]]]]]]]]]]]]]>[>[[[<<<<]>+>>[>>>>>]<-]<]>>>+>>>>>>>+>]<
    ]<[-]<<<<<<<++<+++<+++[
      [>]>>>>>>++++++++[<<++++>++++++>-]<-<<[-[<+>>.<-]]<<<<[
        -[-[>+<-]>]>>>>>[.[>]]<<[<+>-]>>>[<<++[<+>--]>>-]
        <<[->+<[<++>-]]<<<[<+>-]<<<<
      ]>>+>>>--[<+>---]<.>>[[-]<<]<
    ]
    [Enter a number using ()-./0123456789abcdef and space, and hit return.
    Daniel B Cristofani (cristofdathevanetdotcom)
    http://www.hevanet.com/cristofd/brainfuck/]
  `;

  const input = '123456789';

  const result = brunfaick(program, input);

  const expected = '                /\\\n                \\/\\\n              /\\   \n              \\/\\\n            /\\ \\/\n              \\\n          /    \n          \\/\\\n        /  \\/\n        \\/\\\n       \\  /\n      \\/\\\n    /\\   \n     /\\\n  /\\  /\n   / \n \\ \\/\n  \\\n   \n';

  t.is(result, expected);
});


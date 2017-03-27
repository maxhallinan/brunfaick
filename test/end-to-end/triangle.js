const assert = require('chai').assert;
const brunfaick = require('../../.');

describe('end-to-end > triangle.b', () => {
  it('Should return the expected output', () => {
    const program = `
    [ This program prints Sierpinski triangle on 80-column display. ]
                                    >    
                                   + +    
                                  +   +    
                                 [ < + +    
                                +       +    
                               + +     + +    
                              >   -   ]   >    
                             + + + + + + + +    
                            [               >    
                           + +             + +    
                          <   -           ]   >    
                         > + + >         > > + >    
                        >       >       +       <    
                       < <     < <     < <     < <    
                      <   [   -   [   -   >   +   <    
                     ] > [ - < + > > > . < < ] > > >    
                    [                               [    
                   - >                             + +    
                  +   +                           +   +    
                 + + [ >                         + + + +    
                <       -                       ]       >    
               . <     < [                     - >     + <    
              ]   +   >   [                   -   >   +   +    
             + + + + + + + +                 < < + > ] > . [    
            -               ]               >               ]    
           ] +             < <             < [             - [    
          -   >           +   <           ]   +           >   [    
         - < + >         > > - [         - > + <         ] + + >    
        [       -       <       -       >       ]       <       <    
       < ]     < <     < <     ] +     + +     + +     + +     + +    
      +   .   +   +   +   .   [   -   ]   <   ]   +   +   +   +   +    
     * * * * * M a d e * B y : * N Y Y R I K K I * 2 0 0 2 * * * * *
    `;

    const output = brunfaick(program);

    const expected = '                                *    \n\r                               * *    \n\r                              *   *    \n\r                             * * * *    \n\r                            *       *    \n\r                           * *     * *    \n\r                          *   *   *   *    \n\r                         * * * * * * * *    \n\r                        *               *    \n\r                       * *             * *    \n\r                      *   *           *   *    \n\r                     * * * *         * * * *    \n\r                    *       *       *       *    \n\r                   * *     * *     * *     * *    \n\r                  *   *   *   *   *   *   *   *    \n\r                 * * * * * * * * * * * * * * * *    \n\r                *                               *    \n\r               * *                             * *    \n\r              *   *                           *   *    \n\r             * * * *                         * * * *    \n\r            *       *                       *       *    \n\r           * *     * *                     * *     * *    \n\r          *   *   *   *                   *   *   *   *    \n\r         * * * * * * * *                 * * * * * * * *    \n\r        *               *               *               *    \n\r       * *             * *             * *             * *    \n\r      *   *           *   *           *   *           *   *    \n\r     * * * *         * * * *         * * * *         * * * *    \n\r    *       *       *       *       *       *       *       *    \n\r   * *     * *     * *     * *     * *     * *     * *     * *    \n\r  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *    \n\r * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *    \n\r';

    assert.strictEqual(expected, output);
  });
});

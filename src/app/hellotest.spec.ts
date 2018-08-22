fdescribe('helloTest', () => {

    let expected = '';
    let notexpected = '';
    let expectMatch = null;

    beforeEach(() => {
        expected = 'hellotest';
        notexpected = 'hellotest123';
        expectMatch = new RegExp(/^[a-zA-Z0-9]+/);
    });

    afterEach(() => {
        expected = '';
        notexpected = '';
    });

    it('checks hellotest is hellotest',
        () => expect('hellotest').toBe(expected));

    it('checks hellotest is not hellotest',
        () => expect('hellotest').not.toBe(notexpected));

        it('checks hellotest starts with hello',
        () => expect('HelloTest').toMatch(expectMatch));
});
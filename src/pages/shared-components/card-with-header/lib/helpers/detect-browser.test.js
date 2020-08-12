import isSafari from './detect-browser';

describe('isSafari function', () => {
    let navigatorUserAgent;

    beforeEach(() => {
        navigatorUserAgent = jest.spyOn(window.navigator, 'userAgent', 'get');
    });
    it.each`
        userAgent                                                | browser
        ${'Version/13.1.1 Safari/605.1.15'}                      | ${'Safari'}
        ${'Chrome/84.0.4147.105 Safari/537.36 OPR/70.0.3728.95'} | ${'Opera'}
        ${'Chrome/84.0.4147.105 Safari/537.36'}                  | ${'Chrome'}
        ${'Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.52'}  | ${'Edge'}
        ${'Gecko/20100101 Firefox/79.0'}                         | ${'Firefox'}
    `(
        'should return $browser if the browser user agent is $userAgent',
        ({ userAgent, browser }) => {
            navigatorUserAgent.mockReturnValue(userAgent);
            expect(isSafari()).toEqual(browser);
        }
    );
});

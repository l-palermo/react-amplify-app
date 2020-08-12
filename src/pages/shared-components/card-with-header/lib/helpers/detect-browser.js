export default function () {
    const test = function (regexp) {
        return regexp.test(window.navigator.userAgent);
    };
    switch (true) {
        case test(/edg/i):
            return 'Edge';
        case test(/firefox|fxios/i):
            return 'Firefox';
        case test(/opr\//i):
            return 'Opera';
        case test(/chrome|chromium|crios/i):
            return 'Chrome';
        case test(/safari/i):
            return 'Safari';
        default:
            return undefined;
    }
}

const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath', () => {

    test('value greater than 66', () => {
        expect(formatVolumeIconPath(67)).toContain('level-3');
    });
    test('value greater than 33 and less than 66', () => {
        expect(formatVolumeIconPath(34)).toContain('level-2');
    });
    test('value greater than 0 and less than 33', () => {
        expect(formatVolumeIconPath(1)).toContain('level-1');
    });
    test('value equals to 0', () => {
        expect(formatVolumeIconPath(0)).toContain('level-0');
    });
    test('value less than 0', () => {
        expect(formatVolumeIconPath(-100)).toContain('level-0');
    });

});
/**
 * 🧪 testing module
 * @version 1.0.0
 * @date 2026-11-11
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */
import { sample } from './index';

describe('@robert.tools/atom-button', () => {
    it('should return a atom-button string', () => {
        expect(sample('hello')).toBe('sample: hello');
    });

    it('should return a atom-button string with empty input', () => {
        expect(sample('')).toBe('sample: ');
    });
});

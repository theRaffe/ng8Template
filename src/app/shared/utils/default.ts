
export class DefUtils {
    static getPathValue<T>(path: string, source: any, defaultValue: T = null): T {
        const pathArr: any[] = path.split('.');
        const result = pathArr.reduce((xs, x) => (xs && (xs[x] || xs[x] === '')) ? xs[x] : null, source);
        return result || defaultValue;
    }

}
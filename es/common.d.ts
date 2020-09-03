export declare function updateSate<R>(keys: (keyof R)[], receiveProps: R, thisState: R): R;
export declare function fixGridAreaName(name: string): string;
export declare function getScriptFilds<O extends object, C, R extends object>(obj: {
    [k in keyof O]: string;
}, context: C, rz?: R): R;

import { Template } from "coge-generator";
declare class GitTemplate extends Template {
    _locals: Record<string, any>;
    _cwd: string;
    _pkg?: Record<string, any>;
    _originUrl?: string;
    constructor(opts: any);
    init(): Promise<false | undefined>;
    questions(): Promise<{
        type: string;
        name: string;
        message: string;
        default: any;
    }[]>;
    _detectRepositoryName(): any;
    _readPkg(): Record<string, any> | undefined;
    _writePkg(pkg: any): void;
    locals(locals: any): Promise<any>;
    end(): Promise<void>;
}
export = GitTemplate;

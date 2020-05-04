import { Template } from "coge-generator";
import { InstallOptions } from "coge-generator/lib/mixins/install";
declare class AppTemplate extends Template {
    _pkg?: Record<string, any>;
    constructor(opts: any);
    init(): Promise<void>;
    questions(): Promise<({
        type: string;
        name: string;
        message: string;
        default: any;
        choices?: undefined;
    } | {
        type: string;
        name: string;
        message: string;
        choices: {
            name: string;
            value: string;
        }[];
        default: string;
    })[]>;
    locals(locals: any): Promise<any>;
    filter(files: any, locals: any): Promise<any>;
    install(opts?: InstallOptions): Promise<void>;
}
export = AppTemplate;

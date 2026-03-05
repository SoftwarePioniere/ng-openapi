import { ModuleKind, ScriptTarget } from "ts-morph";
import { HttpInterceptor } from "@angular/common/http";
import { SwaggerSpec } from "./swagger.types";
import { IPluginGenerator } from "./plugin.types";

/**
 * Plugin registry entry - supports both legacy format (just the class)
 * and new format with options
 */
export type PluginRegistryEntry =
    | (new (...args: any) => IPluginGenerator)
    | { plugin: new (...args: any) => IPluginGenerator; options?: Record<string, any> };

/**
 * Type guard to detect if plugin entry uses the new format with options
 */
export function isNewPluginFormat(
    entry: any
): entry is { plugin: new (...args: any) => IPluginGenerator; options?: Record<string, any> } {
    return typeof entry === "object" && entry !== null && "plugin" in entry;
}

export interface GeneratorConfig {
    input: string;
    output: string;
    clientName?: string;
    validateInput?: (spec: SwaggerSpec) => boolean;
    options: {
        dateType: "string" | "Date";
        enumStyle: "enum" | "union";
        validation?: {
            response?: boolean;
        };
        generateServices?: boolean;
        generateEnumBasedOnDescription?: boolean;
        customHeaders?: Record<string, string>;
        responseTypeMapping?: {
            [contentType: string]: "json" | "blob" | "arraybuffer" | "text";
        };
        customizeMethodName?: (operationId: string) => string;
    };
    compilerOptions?: {
        declaration?: boolean;
        target?: ScriptTarget;
        module?: ModuleKind;
        strict?: boolean;
    };
    plugins?: PluginRegistryEntry[];
}

// Multi-client configuration for providers
export interface NgOpenapiClientConfig {
    clientName: string; // Unique identifier for this client
    basePath: string;
    enableDateTransform?: boolean;
    interceptors?: (new (...args: HttpInterceptor[]) => HttpInterceptor)[]; // Array of interceptor classes
}

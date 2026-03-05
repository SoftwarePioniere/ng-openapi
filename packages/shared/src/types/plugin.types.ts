import { SwaggerParser } from "../core";
import { Project } from "ts-morph";
import { GeneratorConfig } from "./config.types";

/**
 * Interface for generator class (both constructor and instance)
 */
export interface IPluginGeneratorClass {
    /**
     * Constructor signature - now accepts optional plugin-specific options as 4th parameter
     */
    new (
        parser: SwaggerParser,
        project: Project,
        config: GeneratorConfig,
        options?: Record<string, any>
    ): IPluginGenerator;
}

/**
 * Interface for generator instances
 */
export interface IPluginGenerator {
    /**
     * Generate code files
     */
    generate(outputRoot: string): Promise<void>;
}

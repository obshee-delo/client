export interface RepositoryServiceConfig {
    /**
     * Singular form of collection type name.
     */
    singular: string,
    /**
     * Plural form of collection type name.
     */
    plural: string
}

export interface AnyMap {
    [key: string]: any
};

export type RepositoryResponseEntry = {
    id: number,
    attributes?: AnyMap,
    meta?: any
} & AnyMap;

export type RepositoryBaseResponse = {
    meta?: any,
    error?: any
};

export type RepositorySingularResponse = RepositoryBaseResponse & {
    data: RepositoryResponseEntry
};

export type RepositoryCollectionResponse = RepositoryBaseResponse & {
    data: RepositoryResponseEntry[]
};

export type ModelEntry<Model = any> = Model & {
    id: number,
    meta?: any
};

export type ModelCollection<Model = any> = {
    collection: ModelEntry<Model>[],
    meta?: any
};

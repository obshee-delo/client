import * as qs from 'qs';
import RestService from "../rest";
import { AnyMap, ModelCollection, ModelEntry, RepositoryServiceConfig } from "./types";
import RepositoryResponseAdapter from './responseAdapter';


/**
 * Describes CRUD of Strapi's collection type.
 */
export default class RepositoryService<Model> {
    public repositoryResponseAdapter: RepositoryResponseAdapter<Model> = new RepositoryResponseAdapter<Model>();
    public restService: RestService = new RestService();

    constructor(
        public config: RepositoryServiceConfig
    ) {}

    private insertParameters(url: string, parameters?: AnyMap): string {
        return parameters ? `${url}?${qs.stringify(parameters, { encodeValuesOnly: true })}` : url;
    }

    async getAll(parameters?: AnyMap): Promise<ModelCollection<Model>> {
        const response = await this.restService.get(this.insertParameters(this.config.plural, parameters));
        return this.repositoryResponseAdapter.parseCollectionResponse(response);
    }

    async get(id: number, parameters?: AnyMap): Promise<ModelEntry<Model>> {
        const response = await this.restService.get(this.insertParameters(this.config.plural + `/${id}`, parameters));
        return this.repositoryResponseAdapter.parseSingularResponse(response);
    }

    async create(data: Model, parameters?: AnyMap): Promise<ModelEntry<Model>> {
        const response = await this.restService.post(this.insertParameters(this.config.plural, parameters), data);
        return this.repositoryResponseAdapter.parseSingularResponse(response);
    }

    async update(id: number, data: Partial<Model>, parameters?: AnyMap): Promise<ModelEntry<Model>> {
        const response = await this.restService.put(this.insertParameters(this.config.plural + `/${id}`, parameters), data);
        return this.repositoryResponseAdapter.parseSingularResponse(response);
    }

    async delete(id: number, parameters?: AnyMap): Promise<ModelEntry<Model>> {
        const response = await this.restService.delete(this.insertParameters(this.config.plural + `/${id}`, parameters));
        return this.repositoryResponseAdapter.parseSingularResponse(response);
    }
}

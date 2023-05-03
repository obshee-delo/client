import { ModelCollection, ModelEntry, RepositoryCollectionResponse, RepositoryResponseEntry, RepositorySingularResponse } from "./types";


export default class RepositoryResponseAdapter<T> {
    parseResponseEntry(entry: RepositoryResponseEntry): ModelEntry<T> {
        /**
         * Определяем, какой это тип объекта: компонент или схема.
         * Исходя из этого определяем объект его атрибутов.
         */
        const attributes = typeof entry == 'object' ? (entry?.attributes || entry) : {};

        /**
         * Выносим колбек для коллекций (массивов схем/компонентов).
         */
        const parseResponseEntryCallback = (entry: RepositoryResponseEntry) => this.parseResponseEntry(entry);

        /**
         * Проходимся по каждому свойству его атрибутов.
         */
        for (let attribute in attributes) {
            let attributeEntry = attributes[attribute];
            /**
             * Если текущее свойство - не пустой объект.
             */
            if (
                typeof attributeEntry == 'object' &&
                attributeEntry !== null
            ) {
                /**
                 * То проверяем, какой это тип структуры: коллекция или единичный компонент/cхема.
                 */
                if (attributeEntry instanceof Array) {
                    /**
                     * (такая структура бывает у компонентов)
                     * И если это коллекция, то в это же поле записываем
                     * обработанную версию этого массива, проходясь по
                     * всем его элементам.
                     */
                    attributes[attribute] = attributeEntry.map(parseResponseEntryCallback);
                } else {
                    /**
                     * (такая структура бывает у схем)
                     * И если единичный случай, то проверяем, описывает ли он
                     * коллекцию. Если да, обрабатываем все элементы его поля "data",
                     * если нет, обрабатываем его самого.
                     */
                    attributes[attribute] =
                        attributeEntry?.data instanceof Array
                            ? attributeEntry?.data.map(parseResponseEntryCallback)
                            : this.parseResponseEntry(attributeEntry?.data);
                }
            } else {
                if (
                    typeof attributeEntry == 'string' &&
                    attribute == 'url'
                ) {
                    attributes[attribute] = process.env.STRAPI_PUBLIC_URL + attributeEntry;
                }
            }
        }

        /**
         * В качестве результата возвращаем сжатый объект,
         * где поля id, attributes и meta сжимаются в один уровень.
         */
        return {
            id: entry.id,
            ...attributes,
            ...(entry.meta && {
                meta: entry.meta
            })
        };
    }

    parseSingularResponse(response: RepositorySingularResponse): ModelEntry<T> {
        return {
            ...this.parseResponseEntry(response.data),
            ...(response.meta && {
                meta: response.meta
            }),
            ...(response.error && {
                error: response.error
            })
        }
    }

    parseCollectionResponse(response: RepositoryCollectionResponse): ModelCollection<T> {
        return {
            collection: response.data.map(entry => this.parseResponseEntry(entry)),
            ...(response.meta && {
                meta: response.meta
            }),
            ...(response.error && {
                error: response.error
            })
        }
    }
}

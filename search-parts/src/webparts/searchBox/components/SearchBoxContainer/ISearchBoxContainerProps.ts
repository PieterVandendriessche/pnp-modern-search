import { PageOpenBehavior, QueryPathBehavior } from '../../../../helpers/UrlHelper';
import ISearchService from '../../../../services/SearchService/ISearchService';
import { ISuggestionProviderInstance } from '../../../../services/ExtensibilityService/ISuggestionProviderInstance';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import ISearchQuery from '../../../../models/ISearchQuery';

export interface ISearchBoxContainerProps {
    onSearch: (searchQuery: ISearchQuery) => void;
    searchInNewPage: boolean;
    enableQuerySuggestions: boolean;
    suggestionProviders: ISuggestionProviderInstance<any>[];
    searchService: ISearchService;
    pageUrl: string;
    openBehavior: PageOpenBehavior;
    queryPathBehavior: QueryPathBehavior;
    queryStringParameter: string;
    inputValue: string;
    placeholderText: string;
    domElement: HTMLElement;

    /**
     * The current theme variant
     */
    themeVariant: IReadonlyTheme | undefined;
}

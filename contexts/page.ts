'use client';

import { createContext, ReactNode } from 'react';


export interface IPageContext {
    route: string[],
    heading?: ReactNode
}

const PageContext = createContext<IPageContext>({
    route: [],
    heading: null
});

export default PageContext;

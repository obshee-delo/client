'use client';

import { createContext, ReactNode } from 'react';


export interface IOverlayContext {
    overlayVisible: boolean,
    overlayModal: ReactNode,
    changeOverlayVisibility: Function,
    setOverlayModal: Function
}

const OverlayContext =  createContext<IOverlayContext>({
    overlayVisible: false,
    overlayModal: null,
    changeOverlayVisibility: (visible: boolean) => {},
    setOverlayModal: (modal: ReactNode) => {}
});

export default OverlayContext;

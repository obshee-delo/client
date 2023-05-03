import { createContext } from 'react';


export interface ISpeakersContext {
    currentSpeakerIndex: number,
    setCurrentSpeakerIndex: Function
}

export const SpeakersContext = createContext<ISpeakersContext>({
    currentSpeakerIndex: 0,
    setCurrentSpeakerIndex: (index: number) => {}
});

export default SpeakersContext;

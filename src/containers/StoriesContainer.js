import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';


export const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(lemons => setStoryIds(lemons));
    }, [])

    return (
        <>
            <h1>Hacker News Stories</h1>
            { storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)}
        </>
    );

};

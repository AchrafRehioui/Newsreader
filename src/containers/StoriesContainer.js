import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hnApi';

export const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(lemons => setStoryIds(lemons));
        getStory(25760263).then(data => console.log(data));
    }, [])

    return (

        <p>{JSON.stringify(storyIds)}</p>

    )

};

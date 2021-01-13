import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import { Story } from '../components/Story';


export const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(lemons => setStoryIds(lemons));
        getStory(25760263).then(data => console.log(data));
    }, [])

    return storyIds.map(storyId => <Story storyId={storyId} />);

};

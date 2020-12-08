import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent, TextEvent, YouTubeEvent, } from '@merc/react-timeline'
import './projects.style.css';

const Projects = () => {
    return (
        <>
            <h2 className="text-center font-details- pb-4">PROJECTS</h2>
            <Timeline>
                <Events>
                    <TextEvent date="1/1/19" text="**Markdown** is *supported*" />

                    <ImageEvent
                        date="4/13/19"
                        text="You can embed images..."
                        src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
                        alt="jellyfish swimming"
                        credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
                    >
                        <>
                            <UrlButton href="https://unsplash.com/search/photos/undersea">
                                View more undersea photos
            </UrlButton>
                        </>
                    </ImageEvent>

                    <YouTubeEvent
                        date="6/18/19"
                        id="6UnRHtwHGSE"
                        name="General Tso's Chicken recipe"
                        text="... and YouTube videos!"
                    />
                </Events>
            </Timeline>
        </>

    );
}

export default Projects;
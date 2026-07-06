import type { Meta, StoryObj } from '@storybook/react-vite';

import { ExperienceItem } from '../components/experience';


const meta : Meta<typeof ExperienceItem> = {
    component: ExperienceItem,
    title: 'Components/Experience'
}

export default meta;

type Story = StoryObj<typeof meta>

export const LWO : Story = {
    args : {
        "title" : "Software Developer",
        "company" : "LWO (Light Well Organization)",
        "period" : "Apr 2023 - Present",
        "achievements" : [
            "Supporting for existing projects",
            "Develpment for frontend projects (JavaScript, React, Redux)",
            "Development for backend projects (Java, Spring Boot)",
            "Building a service for showing clients relationships using Observables (JavaScript, React, Redux)",
            "Integrating frontend application (JavaScript, React) with existing backend application (Java, Spring Boot)"
        ]
    }
}

export const RIAPMI : Story = {
    args : {
        "title" : "Junior Researcher",
        "company" : "RI APMI",
        "period" : "Dec 2020 - Apr 2023",
        "achievements" : []
    }
}
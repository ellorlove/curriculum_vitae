
import type { Meta, StoryObj } from '@storybook/react'

import { EducationItem } from '../components/education';

const meta: Meta<typeof EducationItem> = {
    component :  EducationItem,
    title : 'Components/Education'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BSUGraduatee : Story = {
    args : {
        speciality: "Cyber Security Specialist",
        degree: "Bachelor's degree",
        school: "Belarusian State University",
        period: "2015 -2019",
        location: "Minsk, Belarus"
    }
}
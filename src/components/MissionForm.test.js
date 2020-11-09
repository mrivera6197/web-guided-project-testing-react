import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MissionForm from './MissionForm';

test("MissionFrom renders correctly", ()=>{
    render(<MissionForm />);
});


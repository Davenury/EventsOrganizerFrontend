import React from 'react';
import { CalendarView } from './CalendarView';

export function Calendar(props){
    
    return (
        <CalendarView events={props.events} />
    )
}
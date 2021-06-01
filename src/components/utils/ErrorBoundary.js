import React from 'react'
import { Page404 } from './404';

export class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if(this.state.hadError) {
            return <Page404 text=""/>
        }
        return this.props.children;
    }
}
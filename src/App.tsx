import { Component } from 'solid-js';
import AppRoutes from './Router';

const App: Component = () => {
    return (
        <>
            <AppRoutes />
            <div id='popups' />
        </>
    );
}

export default App;
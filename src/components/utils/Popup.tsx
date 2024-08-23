import { Component, createSignal, Show } from 'solid-js';

const Popup: Component = (props) => {
    const [isOpen, setIsOpen] = createSignal(false);
    return (
        <div class='relative'>
            <div onClick={() => setIsOpen(!isOpen())}>
                <props.opener />
            </div>
            <Show when={isOpen()}>
                <div class='flex-it w-20 h-20 fixed bg-black bottom-10 popup'>
                    Hello World
                </div>
            </Show>
        </div>
    );
};

export default Popup;
import eventsBus from '../eventsBus';

const eventName: string = 'test';

const subscribe = (calback: Function) => {
    return eventsBus.subscribe(eventName, calback)
}

const testEvent = (data?: any) => {
    eventsBus.broadcast(eventName, data);
}

export default {
    subscribe,
    testEvent
}
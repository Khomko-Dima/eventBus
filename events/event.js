import eventsBus from '../eventsBus';

const eventName = 'test';

const subscribe = (calback) => {
    return eventsBus.subscribe(eventName, calback)
}

const testEvent = (data) => {
    eventsBus.broadcast(eventName, data);
}

export default {
    subscribe,
    testEvent
}
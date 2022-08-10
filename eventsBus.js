const subscription = {};

const subscribe = (eventName, callback) => {
    if (!subscription[eventName]) {
        subscription[eventName] = new Set();
    }
    const callbacks = subscription[eventName];
    callbacks.add(callback);

    return () => {
        callbacks.delete(callback);

        if (callbacks.size === 0) {
            delete subscription[eventName];
        }
    }
}
const broadcast = (eventName, ...args) => {
    if (!subscription[eventName]) {
        return;
    }
    const callbacks = subscription[eventName];
    for (const calback of callbacks) {
        calback(...args);
    }
}
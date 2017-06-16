if (__DEV__) {
    const reactotron = require('reactotron-react-native');
    const sagaPlugin = require('reactotron-redux-saga');
    const reactotronRedux = require('reactotron-redux').reactotronRedux;

    const instance = reactotron.default;
    const openInEditor = reactotron.openInEditor;
    const trackGlobalError = reactotron.trackGlobalErrors;
    const asyncStorage = reactotron.asyncStorage;
    const networking = reactotron.networking;

    instance.configure()
        .use(openInEditor())
        .use(trackGlobalError())
        .use(asyncStorage())
        .use(sagaPlugin())
        .use(reactotronRedux())
        .use(networking())
        .connect();

    GLOBAL.__REACTOTRON__ = instance;
}

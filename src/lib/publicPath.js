
const getEnv = () => {
    const {host} = location;
    if (host.match(/local/) || !host) {
        return `http://${localIp}:3000/mc/`;
    } else if (host.match(/qa(\d?)/)) {
        return `https://qares.hjfile.cn/mc/touch/`;
    } else if (host.match(/yz/)) {
        return 'https://yzres.hjfile.cn/mc/touch/';
    } else {
        return 'https://res.hjfile.cn/mc/touch/';
    }
};
__webpack_public_path__ = getEnv();

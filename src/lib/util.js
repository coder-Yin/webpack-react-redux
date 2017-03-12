import once from './once';
import cookie from 'cookie';

/*根据参数名在url中获取参数值*/
export function getParamByName(name) {
    let match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

/*拿pathname里面的参数,ID一位*/
export function getIdFromParams(index) {
    let params = (window.location.pathname).match(/\d{1,}/g);
    return params && params.length ? params[index] : null;
}

/*拿pathname里面的参数*/
export function getParams(index) {
    let params = (window.location.pathname).match(/\d{2,}/g);
    return params && params.length ? params[index] : null;
}

export function trim(str) {
    return str.replace(/\s*$/ig, '');
}
/*get the param which unique letter from pathname*/
export function getUniqueParam(str) {
    let params = RegExp(str + '(\\w+)').exec(window.location.pathname);
    return params && params.length ? params[1] : null;
}

export const isWechat = once(function() {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
});

export function setCookie(c_name, value, path, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ";path=" + path + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

export function getCookie(c_name) {
    if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            let c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1)
                c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return "";
}
//base on useragent to check if it is in APP
// HJApp 1.0/android/GT-I9500/B49663F2D1FB1806FFCF626/4.4.2/com.hujiang.hjclass/3.8.7.377/tag_qudao/
// HJApp 1.0/IOS/iPhone/48337a3a0641eb008da68cddd0a22166/9.0/com.hjclass.hujiangclass/3.4.2.484/AppStore/
export function isApp() {
    const ua = navigator.userAgent;
    if (ua.match(/android/i) && isAndroidApp()) {
        return true;
    } else if (ua.match(/hjapp/i)) {
        return true;
    } else {
        return false;
    }
}

export function isIpadApp() {
    const ua = navigator.userAgent;
    if (!isApp()) {
        return false;
    } else if (ua.match(/ipad/ig)) {
        return true;
    } else {
        return false;
    }
}

export function isAndroidApp() {
    const {HJUserAgent} = cookie.parse(document.cookie);
    const ua = navigator.userAgent;
    if (HJUserAgent && HJUserAgent.match(/hjapp/ig)) {
        return true;
    } else if (ua.match(/android/i) && ua.match(/hjapp/i)) {
        return true;
    } else {
        return false;
    }
}

export function isIphoneApp() {
    if (isApp() && !isAndroidApp() && !isIpadApp()) {
        return true;
    } else {
        return false;
    }
}

export function getAppDevice() {
    let device = '触屏';
    if (isIpadApp()) {
        device = 'iPad';
    } else if (isAndroidApp()) {
        device = '安卓';
    } else if (isIphoneApp()) {
        device = 'iPhone';
    }
    return device;
}

export function shareToOthers(type, shareOptions) {

    let title = shareOptions.title ? shareOptions.title : '',
        desc = shareOptions.desc ? shareOptions.desc : '',
        link = shareOptions.link ? shareOptions.link : '',
        imgUrl = shareOptions.imgUrl ? shareOptions.imgUrl : '',
        androidAppVersion = shareOptions.androidAppVersion;


    if (!isAndroidApp()) {
        //ios share
        let urlParam = '';

        link = escape(link);
        imgUrl = escape(imgUrl);

        if (type === 'wechat') {
            urlParam = 'shareFriend';
        } else if (type === 'friend') {
            urlParam = 'shareTimeline';
        }

        window.location.href = `hujiangclass3://hjclass.hujiang.com/${urlParam}?title=${title}&description=${desc}&imageurl=${imgUrl}&url=${link}`;
    } else {
        if (androidAppVersion >= 391) {
            let action = '';

            if (type === 'wechat') {
                action = 'share_weixin';
            } else if (type === 'friend') {
                action = 'share_weixin_circle';
            }
            let json = {
                'action': action,
                'data': {
                    'title': 0,
                    'shareTitle': title,
                    'description': desc,
                    'link': link,
                    'imageUrl': imgUrl
                }
            };
            hj_event.emit('extendedMethod', JSON.stringify(json));
        } else {
            let json = {
                'title': 0,
                'shareTitle': title,
                'description': desc,
                'link': link,
                'imageUrl': imgUrl
            };
            hj_event.emit('openShareWindow', JSON.stringify(json));
        }
    }
}
export const getEnv = () => {
    let env,
        host = location.host;
    if (/^local/i.test(host)) {
        env = 'local';
    } else if (/^qa/i.test(host)) {
        env = 'qa';
    } else if (/^yz/i.test(host)) {
        env = 'yz';
    } else {
        env = 'production';
    }
    return env;
}

export const filterXss = content => {
    return content.replace(/\<(script.*)\>(\S*)\<(\/script.*)\>/ig, '&lt;$1&gt;$2&lt;$3&gt;');
}
export const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component';

export const addClass = (el, className) => {
    const preClassArr = el.className.split(' '),
        addClassArr = className.split(' '),
        newClassArr = [...new Set([...preClassArr, ...addClassArr])];
    return newClassArr.join(' ');
}
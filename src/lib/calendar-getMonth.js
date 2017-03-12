
export function getDateString(date, seperator) {
	let parsedDate = date;
	if (!(date instanceof Date)) {
		parsedDate = new Date(date);
	}

	let year = parsedDate.getFullYear(),
		month = parsedDate.getMonth() + 1,
		day = parsedDate.getDate();

    if (year === 2100 && month === 1 && day === 1) {
        return ''; // 2100-01-01是缺省日期，所以直接返回空串
    }

	let s = seperator !== undefined ? seperator : DefaultDateSeperator;

	return `${year}${s}${month}${s}${day}`;
}

const monthSize = (oDate) => {
    const year = oDate.getFullYear();
    const month = oDate.getMonth();
    const _oDate = new Date();
    _oDate.setFullYear(year);
    _oDate.setMonth(month + 1, 0);
    return _oDate.getDate();
};


export function getCalendarMonth(param) {
    // param = new Date('2016-01-02');
    let y = param.getFullYear();
    let m = param.getMonth();
    let _m;
    let firstDay = new Date(y, m, 1).getDay(); //当月第一天 周期
    let days = monthSize(param);//当月天数
    let prevMonthDays = monthSize(new Date(y, m - 1));//上月天数
    let initPrevDay = prevMonthDays - firstDay;
    let lines = Math.ceil((firstDay + days) / 7);
    _m = new Array(lines * 7);
    let nextMonthDay = 0;

    for (let i = 0; i < _m.length; i++) {
        let weekIndex = parseInt(i / 7);
        if (i < firstDay) {
            let date = ++initPrevDay;
            if (m === 0 && date > 7) {
                _m[i] = {
                    isCurMonth: false,
                    dateNum: date,
                    weekIndex,
                    date: `${y - 1}/${12}/${date}`
                };
            } else {
                _m[i] = {
                    isCurMonth: false,
                    dateNum: date,
                    weekIndex,
                    date: `${y}/${m}/${date}`
                };
            }
        } else if (i >= (firstDay + days)) {
            let date = ++nextMonthDay;

            if (m === 11 && date <= 7) {
                _m[i] = {
                    isCurMonth: false,
                    dateNum: date,
                    weekIndex,
                    date: `${y + 1}/${1}/${date}`
                };
            } else {
                _m[i] = {
                    isCurMonth: false,
                    dateNum: date,
                    weekIndex,
                    date: `${y}/${m + 2}/${date}`
                };
            }
        } else {
            let _date = i - firstDay + 1;
            let today = new Date();
            let today_y = today.getFullYear();
            let today_m = today.getMonth();
            let today_d = today.getDate();
            let isToday = today_y === y && today_m === m && today_d === _date ? true : false;
            _m[i] = {
                dateNum: _date, //日期
                day: i % 7, //周期
                weekIndex,
                isCurMonth: true,
                isToday,
                date: `${y}/${m + 1}/${_date}`
            };
        }
    }
    return _m;
}

export function getOneDateWeekIndex(date) {
    let monthDays = getCalendarMonth(date);
    let dateString = getDateString(date, '/');
    let returnDate = monthDays.filter(item => {
        return item.date === dateString;
    });
    let weekIndex = returnDate[0].weekIndex;
    return weekIndex ? weekIndex : 0;
}

import _ from 'lodash';

const Functions = {
    uuidGenerated () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
    parseQuery(query) {
        return query
            ? (/^[?#]/.test(query) ? query.slice(1) : query)
                .split('&')
                .reduce((params, param) => {
                        let [key, value] = param.split('=');
                        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                        return params;
                    }, {}
                )
            : {}
    },
    formatDate(date) {
        let dateObj = new Date(date);
        let year = dateObj.getFullYear();
        let month = parseInt(dateObj.getMonth()) + 1;
        let day = dateObj.getDate();

        if(String(month).length === 1) {
            month = "0" + String(month);
        }
        if(String(day).length === 1) {
            day = "0" + String(day);
        }
        return year + "-" + month + "-" + day;
    },
    makeTransactionsQueryString(obj) {
        if(_.isEmpty(obj)) {
            return "";
        }

        var queryString = "?" + Object.keys(obj).map((key) => {
            if(obj[key] === null || obj[key] === undefined || obj[key] === '') {
                return null;
            }
            return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
        }).filter(Boolean).join('&');
        return queryString;
    },
    formatToCurrency(number, symbol = '£') {
        var j;
        let decPlaces = 2;
        let decSep = ".";
        let thouSep =",";
        var sign = number < 0 ? "-" : "";
        var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
        j = (j = i.length) > 3 ? j % 3 : 0;

        return symbol + sign +
            (j ? i.substr(0, j) + thouSep : "") +
            i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
            (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
    }
};

export { Functions as default }




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
    }
};

export { Functions as default }


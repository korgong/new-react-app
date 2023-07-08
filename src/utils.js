export function throttle(func, delay) {
    let timer = null;
    return function () {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            func.apply(this, arguments);
            timer = null;
        }, delay);
    }
}

export function debounce(func, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, arguments);
            timer = null;
        }, delay);
    }
}

export const DataSource = {
    getComments: (id) => {
        return new Promise(resolve => {
            resolve([1, 2, 3]);
        })
        // return Promise.resolve([1, 2, 3]);
    },
    getStudents: (id) => {
        return Promise.resolve([1, 2, 3]);
    },
}

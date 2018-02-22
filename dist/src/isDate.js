"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDate(date) {
    var work = date;
    if (typeof work === 'string') {
        if (work == null || work.length === 0) {
            work = null;
        }
        else {
            work = new Date(work);
        }
    }
    return work != null && work instanceof Date && !isNaN(work.valueOf());
}
exports.isDate = isDate;
//# sourceMappingURL=isDate.js.map
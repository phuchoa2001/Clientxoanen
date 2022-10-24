import moment from 'moment'

function GetTime(createAt) {

    const AddZero = (number) => {
        if (number > 9) {
            return number;
        } else {
            return "0" + number;
        }
    }
    var check = moment(createAt);
    var date = check.day();
    if (date === 0) {
        date = "Chủ nhật"
    } else {
        date++
    }
    var month = check.format('M');
    var day = check.format('D');
    var year = check.format('YYYY');

    return {
        date: date !== "Chủ nhật" ? "Thứ " + date : date,
        day: AddZero(day),
        month: AddZero(month),
        year: year
    }
}

export default GetTime;
function getTimeStamps(hours, minutes, seconds, month, dateyear) {
    var date_ob = new Date();
    var date = date_ob.getDate();
    var month = (date_ob.getMonth() + 1);
    var year = date_ob.getFullYear();
    var hours = (date_ob.getHours());
    var minutes = (date_ob.getMinutes());
    var seconds = (date_ob.getSeconds());
    var dateDisplay = month + "/" + date + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

    return dateDisplay;
};

module.exports = getTimeStamps;
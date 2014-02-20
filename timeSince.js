var timesince = function timeSince(selector) {

    var templates = {
        prefix: "",
        future: "",
        suffix: " ago.",
        seconds: "Less than a minute",
        minute: "About a minute",
        minutes: "%d minutes",
        hour: "About an hour",
        hours: "About %d hours",
        day: "One day",
        days: "%d days",
        month: "About a month",
        months: "%d months",
        year: "About a year",
        years: "%d years"
    };
    var template = function(t, n) {
        return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
    };

    var timer = function(time) {
        if (!time)
            return;
        time = parseInt(time) * 1000; // Change to milliseconds
        time = new Date(time);
        var now = new Date();
        var seconds = ((now.getTime() - time) * .001) >> 0;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var years = days / 365;

        return templates.prefix + (
                seconds < 0 && template('future') ||
                seconds < 45 && template('seconds', seconds) ||
                seconds < 90 && template('minute', 1) ||
                minutes < 45 && template('minutes', minutes) ||
                minutes < 90 && template('hour', 1) ||
                hours < 24 && template('hours', hours) ||
                hours < 42 && template('day', 1) ||
                days < 30 && template('days', days) ||
                days < 45 && template('month', 1) ||
                days < 365 && template('months', days / 30) ||
                years < 1.5 && template('year', 1) ||
                template('years', years)
                ) + (seconds < 0 && "" || templates.suffix);
    };

    var elements = document.getElementsByClassName('timesince');
    for (var i in elements) {
        var $this = elements[i];
        if (typeof $this === 'object') {
            $this.innerHTML = timer($this.dataset.timesince || $this.dataset.timesince);
        }
    }
    // update time every minute
    setTimeout(timesince, 60000);
};

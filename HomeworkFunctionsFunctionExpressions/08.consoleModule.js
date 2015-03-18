var specialConsole = (function () {
    function writeLine(string) {
        console.log(formatMessage(string, arguments));
    }

    function writeError(string) {
        console.error(formatMessage(string, arguments));
    }

    function writeInfo(string) {
        console.info(formatMessage(string, arguments));
    }

    function writeWarning(string) {
        console.warn(formatMessage(string, arguments));
    }

    function formatMessage(string) {
        var matches = string.match(/{\d+}/g),
            i,
            index;
        if (matches == null) {
            return string;
        }

        matches.sort(function (a, b) {
            return parseInt(a.replace('{', '').replace('}', '')) - parseInt(b.replace('{', '').replace('}', ''));
        });

        if (!arguments[1]) {
            return string;
        }

        if (arguments[1].length - 1 <= parseInt(matches[matches.length - 1].substr(1))) {
            throw new Error;
        }

        for (i = 0; i < matches.length; i++) {
            index = parseInt(matches[i].substr(1)) + 1;
            if (typeof arguments[1][index] == 'object') {
                string = string.replace(matches[i], arguments[1][index].toString());
            }
            string = string.replace(matches[i], arguments[1][index]);
        }

        string = string.replace(/\s+undefined/, "");

        return string;
    }


    return {
        writeLine: writeLine,
        writeError: writeError,
        writeInfo: writeInfo,
        writeWarning: writeWarning
    };
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", {
    name: "Gosho", toString: function () {
        return this.name
    }
});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", {
    msg: "An error happened", toString: function () {
        return this.msg
    }
});

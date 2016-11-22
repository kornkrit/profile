/**
 * Created by kornkritsupayanant on 11/15/2016 AD.
 */
TOKEN   = { time_created: 1479219624000,
    msg_mac: 'oFzy4jWYfQHKrhbzgVYaTPmqq1CdR24be6jwCs+rAps='};

var repl = new ReplitClient('api.repl.it', '80', 'java', TOKEN);

repl.connect().then(
    function() {
        document.querySelector('.status').innerHTML = 'connected';
        start();
    },
    function() {
        document.querySelector('.status').innerHTML = 'failed';
    }
);

function start() {
    document.querySelector('button').onclick = function() {
        repl.evaluate(
            document.querySelector('input').value,
            {
                stdout: function(str) {
                    document.querySelector('.out').innerHTML += str + '\n';
                }
            }
        ).then(
            function(result) {
                document.querySelector('.result').innerHTML += (result.error || result.data) + '\n';
            },
            function(err) {
                console.error(err);
            }
        );
    };
}

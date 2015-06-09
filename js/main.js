document.querySelector('.sk-render').addEventListener('click', function (e) {
    var code = editor.getSession().getValue();

    document.querySelector('.sk-result').contentWindow.document.documentElement.innerHTML = code;
}, false);

//init code highlight

var editor = ace.edit("sk-editor"),
                defaultCode = '<!DOCTYPE html> \n' +
                    '<html> \n' +
                    '<head> \n' +
                    '<meta charset="utf-8"> \n' +
                    '<title>Skillosa sandbox</title> \n' +
                    '</head> \n' +
                    '    <body> \n' +
                    '        Skillosa here! \n' +
                    '    </body> \n' +
                    '</html>';

            editor.setTheme("ace/theme/textmate");
            editor.getSession().setMode("ace/mode/html");
            editor.setValue(defaultCode, 1);
            editor.$blockScrolling = Infinity;

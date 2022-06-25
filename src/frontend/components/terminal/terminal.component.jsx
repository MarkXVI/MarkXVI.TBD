import React from "react";

import { help, socials, email, banner, EmojiUP } from './commands.js';
import '../../stylesheets/terminal.stylesheet.css';

const Terminal = () => {

    const $ = (elid) => {
        return document.getElementById(elid);
    };

    let git = 12;
    let pw = false;
    let pwd = false;
    let commands = [];

    console.log(
        "%c❤❤❤❤❤",
        "color: #ff0000; font-size: 24px;"
    );

    const enterKey = (e) => {
        const command = $('typer');
        const textarea = $('texter');
        if (e.keyCode == 181) {
            document.location.reload(true);
        }
        if (pw) {
            let et = "*";
            let w = textarea.value.length;
            command.innerHTML = et.repeat(w);
            if (textarea.value === password) {
                pwd = true;
            }
            if (pwd && e.keyCode == 13) {
                loopLines(secret, "color2 margin", 120);
                command.innerHTML = "";
                textarea.value = "";
                pwd = false;
                pw = false;
                let liner = $('liner');
                liner.classList.remove("password");
            } else if (e.keyCode == 13) {
                addLine("Wrong password", "error", 0);
                command.innerHTML = "";
                textarea.value = "";
                pw = false;
                let liner = $('liner');
                liner.classList.remove("password");
            }
        } else {
            if (e.keyCode == 13) {
                commands.push(command.innerHTML);
                git = commands.length;
                addLine("Guest@MarkXVI:~$ " + command.innerHTML, "no-animation", 0);
                commander(command.innerHTML.toLowerCase());
                command.innerHTML = "";
                textarea.value = "";
            }
            if (e.keyCode == 38 && git != 0) {
                git -= 1;
                textarea.value = commands[git];
                command.innerHTML = textarea.value;
            }
            if (e.keyCode == 40 && git != commands.length) {
                git += 1;
                if (commands[git] === undefined) {
                    textarea.value = "";
                } else {
                    textarea.value = commands[git];
                }
                command.innerHTML = textarea.value;
            }
        }
    }

    const commander = (cmd) => {
        switch (cmd.toLowerCase()) {
            case 'banner':
                return loopLines(banner, "", 80);
            case 'emoji-up':
                return loopLines(EmojiUP, "", 80);
            case 'help':
                return loopLines(help, "", 80);
            case 'whois':
                return whois;
            case 'video':
                return video;
            case 'projects':
                return projects;
            case 'connect':
                return connect();
            case "clear":
                return setTimeout(() => {
                    let terminal = $('terminal');
                    terminal.innerHTML = '<a id="before"></a>';
                }, 1);
            default:
                return addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
                   
        }
    }

    const connect = () => {
        return 'How would you like to connect with me?';
    }

    const newTab = (link) => {
        setTimeout(function () {
            window.open(link, "_blank");
        }, 500);
    }

    const addLine = (text, style, time) => {
        var t = "";
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
                t += "&nbsp;&nbsp;";
                i++;
            } else {
                t += text.charAt(i);
            }
        }
        setTimeout(() => {
            const before = $('before');
            var next = document.createElement("p");
            next.innerHTML = t;
            next.className = style;

            before.parentNode.insertBefore(next, before);

            window.scrollTo(0, document.body.offsetHeight);
        }, time);
    }

    const loopLines = (name, style, time) => {
        name.forEach((item, index) => {
            addLine(item, style, index * time);
        });
    }
    
    const init = () => {
        let cursor = $("cursor");
        cursor.style.left = "0px";

        loopLines(banner, "", 80);
        const textarea = $('texter');
        textarea.focus();

    }
    window.onload = init;
    
    const nl2br = (txt) => {
        return txt.replace(/\n/g, '');
    }

    const typeIt = (e) => {
        e = e || window.event;
        let w = $("typer");
        let tw = e.target.value;
        if (!pw) {
            w.innerHTML = nl2br(tw);
        }
    }

    function moveIt(count, e) {
        let cursor = $("cursor");
        e = e || window.event;
        let keycode = e.keyCode || e.which;

        if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
            cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
        } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
            cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
        }
    }


    return (
        <div id="terminalPage">
            <div id="terminal">
                <a id="before"></a>
            </div>
            <div id="command">
                <textarea
                    type="text"
                    id="texter"
                    onKeyUp={(event) => {
                        typeIt(event);
                        enterKey(event)
                    }}
                    onKeyDown={(event) => {
                        typeIt(event);
                        moveIt(event.target.value.length, event);
                    }}
                    onKeyPress={(event) => typeIt(event)}
                    autoFocus={true} onBlur={({ target }) => target.focus()}
                ></textarea>
            </div>
            <div id="liner">
                <span id="typer"></span><b className="cursor" id="cursor">█</b>
            </div>
        </div>
    );
};

export default Terminal;
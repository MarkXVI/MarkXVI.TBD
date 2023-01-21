import React from "react";

import { help, socials, email, banner, banner2 } from './base_commands.js';
import { up, spiderman, trippy, minion } from './emoji_commands';
import '../../stylesheets/terminal.stylesheet.css';

const Terminal = (setActivePanel) => {

    const $ = (elid) => {
        return document.getElementById(elid);
    };

    let git = 12;
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

    const commander = (cmd) => {
        let commandArray = cmd.toLowerCase().split(" ");

        switch (commandArray[0]) {
            case 'undefined':
                return addLine('<span class=\"whisper\">This is not a bug, it is a feature!<span>', "error", 80);
            case 'banner':
                return loopLines(banner, "", 80);
            case 'emoji':
                switch (commandArray[1]) {
                    case '':
                        return addLine('<span class=\"whisper\">you do have write something more, I can\'t read you mind and show you what you want to see...', "", 80)
                    case 'help':
                        return addLine('<span class=\"inherit\"> Available options: <span class=\"command\">up</span>, <span class=\"command\">spiderman</span>, <span class=\"command\">trippy</span>, <span class=\"command\">minion</span>.</span>', "", 80);
                    case 'up':
                        return loopLines(up, "", 80);
                    case 'spiderman':
                        return loopLines(spiderman, "", 80);
                    case 'trippy':
                        return loopLines(trippy, "", 80);
                    case 'minion':
                        return loopLines(minion, "", 80);
                    default:
                        return addLine('<span class=\"inherit\">This emoji art is not available yet. Contact me and we\'ll see about adding it!<span>', "", 80)
                }
            case 'showme':
                switch (commandArray[1]) {
                    case 'ascii':
                        
                        const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '
                        
                        
                        return;
                    case 'off':
                        try {
                            const video = document.getElementsByTagName("video");
    
                            const mediaStream = video[0].srcObject;
                            const tracks = mediaStream.getTracks();
                            tracks.forEach(track => track.stop())

                            video[0].remove();
                        } catch (e) {
                            console.log(e);
                        }
                        return;
                    default:
                        return videoFeed();
                }
            case 'help':
                return loopLines(help, "", 80);
            case 'open':
                switch (commandArray[1]) {
                    case 'help':
                        return addLine('<span class=\"inherit\"> Available options: <span class=\"command\">Instagram</span>, <span class=\"command\">art-Instagram</span>, <span class=\"command\">Linkedin</span>, <span class=\"command\">Twitter</span>, <span class=\"command\">GitHub</span>.</span>', "", 80);
                    case 'instagram':
                        return newTab(socials["instagram"]);
                    case 'art-instagram':
                        return newTab(socials["art-instagram"]);
                    case 'twitter':
                        return newTab(socials["twitter"]);
                    case 'linkedin':
                        return newTab(socials["linkedin"]);
                    case 'github':
                        return newTab(socials["github"]);
                    default:
                        return (
                            addLine('Error: Link not found.', "error", 80),
                            addLine('type <span class=\"command\">"open help"</span> for available options.', "", 80)
                        );
                }
            case 'goto':
                switch (commandArray[1]) {
                    case 'help':
                        return addLine('<span class=\"inherit\"> Available options: <span class=\"command\">Home</span>, <span class=\"command\">CV</span>, <span class=\"command\">Contact</span>', "", 80);
                    case 'home':
                        setActivePanel.setActivePanel('start');
                        return(<Navigate to="/" replace={true} state={{ from: "/terminal" }} />);
                    case 'cv':
                        return () => setActivePanel.setActivePanel('cv');
                    case 'contact':
                        return () => setActivePanel.setActivePanel('contact');
                    default:
                        return (
                            addLine('Error: Link not found.', "error", 80),
                            addLine('type <span class=\"command\">"goto help"</span> for available options.', "", 80)
                        );
                }
            case 'download':
                switch (commandArray[1]) {
                    case 'help':
                        return addLine('<span class=\"inherit\"> Available options: <span class=\"command\">CV</span>.</span>', "", 80);
                    case 'cv':
                        return download('cv.pdf');
                    case 'chicken':
                        return download('chicken.svg');
                    default:
                        return (
                            addLine('Error: File not found.', "error", 80),
                            addLine('type <span class=\"command\">"download help"</span> for available files for download.', "", 80)                          
                        );
                }
            case 'connect':
                return (
                    addLine('Why would someone so amazing as <span class=\"command\">YOU</span> was to connect with someone like <span class=\"command\">ME</span>?', '', 100),
                    addLine('Would you still like to contact me? (Yes or No): ', "", 80)
                );
            case "clear":
                return setTimeout(() => {
                    let terminal = $('terminal');
                    terminal.innerHTML = '<a id="before"></a>'; 
                }, 1);
            default:
                return addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
                   
        }
    }

    const videoFeed = () => {
        const video = document.createElement("video");
        video.setAttribute("playsinline", "");
        video.setAttribute("autoplay", "");
        video.setAttribute("muted", "");
        video.style.maxWidth = "60%";
        video.style.minWidth= "400px";
        video.style.maxHeight= "800px";
        video.style.display = "block";
        video.style.margin = "auto";
        video.style.padding = "20px 0";
        
        
        const facingMode = "user";
        const constraints = {
          audio: false,
          video: {
            facingMode
          }
        };
        
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
          video.srcObject = stream;
        });
        
        document.body.appendChild(video);
    }

    const newTab = (link) => {
        setTimeout(function () {
            window.open(link, "_blank");
        }, 500);
    }

    const download = (filename) => {
        console.log(filename);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `../../assets/${filename}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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

        loopLines(banner2, "", 80);
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
        w.innerHTML = nl2br(tw);
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
                    onBlur={({ target }) => target.focus()}
                ></textarea>
            </div>
            <div id="liner">
                <span id="typer"></span><b className="cursor" id="cursor">█</b>
            </div>
        </div>
    );
};

export default Terminal;
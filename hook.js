/* exported Script */
/* globals console, _, s */

/** Global Helpers
 *
 * console - A normal console instance
 * _       - An underscore instance
 * s       - An underscore string instance
 */

class Script {
    /**
     * @params {object} request
     */
    process_incoming_request({ request }) {
        
        // console is a global helper to improve debug
        console.log("Incoming webhook");
        console.log("------------------------------------------------");
        let message = "";
        const name = request.commitAuthor;
        const authorEmail = request.commitAuthorEmail;
        const commitDate = request.commitDate;
        const commitMessage = request.commitMessage;
        const repo = request.repositoryName;
        const projectName = request.projectName;
        message += "Commit by author:" + name + " whose email is " + authorEmail;
        message += " on the repo " + "[" + projectName + "](https://github.com/" + repo + ")";
        message += " on " + commitDate + " and their commit message was,'" + commitMessage + "'"

        const content = {
            "emoji": ":smiley:",
            "text": message,
            "attachments": [
                {
                    "title": "Appveyor",
                    "title_link": "https://rocket.chat",
                    "text": "Appveyor is a CI tool",
                    "image_url": "https://writing-demo.dev.rocket.chat/images/integration-attachment-example.png",
                    "color": "#764FA5"
                }
            ]
        };

        return {
            content:content
        };
    }
}
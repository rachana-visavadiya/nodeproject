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
        console.log("------------------------------------------------");
        let reqContent = request.content;
        console.log(JSON.stringify(reqContent));
        let message = "";
        const name = reqContent.commitAuthor;
        const authorEmail = reqContent.commitAuthorEmail;
        const commitDate = reqContent.commitDate;
        const commitMessage = reqContent.commitMessage;
        const repo = reqContent.repositoryName;
        const projectName = reqContent.projectName;
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
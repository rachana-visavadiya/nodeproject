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
        let requestContent = request.content;
        let message = "";
        const name = requestContent.commitAuthor;
        const authorEmail = requestContent.commitAuthorEmail;
        const commitDate = requestContent.commitDate;
        const commitMessage = requestContent.commitMessage;
        const repo = requestContent.repositoryName;
        const commitId = requestContent.commitId;
        const projectName = requestContent.projectName;
        const buildNumber = requestContent.buildNumber;
        const buildId = requestContent.buildId;
        message += "Commit by author:" + name + " whose email is " + authorEmail;
        message += " on the repo " + "[" + projectName + "](https://github.com/" + repo + ")";
        message += " on " + commitDate + " and their commit message was,'" + commitMessage + "'\n"
        message += "Build details, build ID:" + buildId + ", build number:" + buildNumber + "\n"
        message += "You can check the [Commit](https://github.com/" + repo + "/commit/" + commitId + ")"

        const content = {
            "emoji": ":smiley:",
            "text": message,
            "attachments": [
                {
                    "title": projectName + " build",
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
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
        console.log(request.content);
        const content = {
            "emoji": ":smirk:",
            "text": "Example message",
            "attachments": [
                {
                    "title": "Rocket.Chat",
                    "title_link": "https://rocket.chat",
                    "text": "Rocket.Chat, the best open source chat",
                    "image_url": "https://writing-demo.dev.rocket.chat/images/integration-attachment-example.png",
                    "color": "#764FA5"
                }
            ]
        };

        return {
            content:content
        };

        // return {
        //   error: {
        //     success: false,
        //     message: 'Error example'
        //   }
        // };
    }
}
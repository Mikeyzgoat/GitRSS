// create a discord bot which can fetch RSS feed from any github repo
require('dotenv').config()
import {
    REST,
    Client,
    GatewayIntentBits,
    Routes
} from "discord.js";

DISCORD_KEY = process.env.API_KEY
URL = process.env.GITHUB_RSS_FEED

const client = new Client();

const commands = [
    {
        "name":"ping",
        "description":"Replies with Pong!"
    },
    {
        "name":"help",
        "description":"Provides details of all commands the bot can listen to."
    },
    {
        "name":"about",
        "description":"Description about the bot."
    },
    {
        "name":"getrss",
        "description":"Receive the latest update of the rss feed in a repository wise order."
    },
    {
        "name":"subscribe",
        "description":"Add the github repo you wish to get RSS feed updates from."
    },
    {
        "name":"unsubscribe",
        "description":"Un-subscribe from the RSS feed."
    },
    {
        "name":"specificfeed",
        "description":"Display the latest feed for a specific github repo."
    }
];

client.on('ready',()=>{
    console.log("Successfully logged in!")
});

client.login(DISCORD_KEY)
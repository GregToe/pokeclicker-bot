const { SECOND, HOUR } = require('./helpers/constants');

module.exports = {
  development: true,
  prefix: '!',
  token: process.env.DISCORD_BOT_TOKEN,
  // Image source website base
  website: 'https://pokeclicker.com/',
  // Wiki base link
  wikiWebsite: 'https://wiki.pokeclicker.com/',
  // Bot owner ID, used for eval and other commands
  ownerID: '1112455248552923309',
  // Channel where the backup database should be sent
  backupChannelID: '1368635287420407918',
  quizChannelID: '1368635256554524802',
  modLogChannelID: '1368635236254224464',
  // Specific roles in the server
  mutedRoleID: '758167963294629898',
  externalScriptsRoleID: '761015248856809493',
  autoReminderRoleID: '871624019005292564',
  // Roles that get bonus coins (percentage gain)

  serverIcons: {
    money: '<:money:1368636891854934016>',
    kabuto: '<:kabuto:1368637659248857112>',
  },
  spamDetection: {
    ignoreChannels: ['bot-coins'], // channel names or IDs
    spam: {
      amount: 4, // how many messages within timeframe count as spam (0 to disable)
      time: 3 * SECOND, // message count within x ms
      mute: 1 * HOUR, // how long to mute the user in ms
    },
    dupe: {
      amount: 3, // how many duplicate messages within timeframe count as spam (0 to disable)
      time: 30 * SECOND, // message count within x ms
      mute: 1 * HOUR, // how long to mute the user in ms
    },
  },
};

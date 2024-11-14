PlayerEvents.chat(e => {
    const { player, message, server } = e;

    // Only proceed if the message is a recognized command
    if (message.toLowerCase().includes('creative script')) {
        // Switch to creative mode and run the command
        server.runCommandSilent(`/gamemode creative ${player.username}`);
        server.runCommandSilent(`/gamestage add ${player.username} creative`);
    } 
    else if (message.toLowerCase().includes('survival script')) {
        // Switch to survival mode and run the command
        server.runCommandSilent(`/gamemode survival ${player.username}`);
        server.runCommandSilent(`/gamestage remove ${player.username} creative`);
    } 
    else if (message.toLowerCase().includes('spectator script')) {
        // Switch to spectator mode and run the command
        server.runCommandSilent(`/gamemode spectator ${player.username}`);
        server.runCommandSilent(`/gamestage remove ${player.username} creative`);
    } 
    else if (message.toLowerCase().includes('adventure script')) {
        // Switch to adventure mode and run the command
        server.runCommandSilent(`/gamemode adventure ${player.username}`);
        server.runCommandSilent(`/gamestage remove ${player.username} creative`);
    }
});

ServerEvents.loaded(event => {
    if (!event.server.persistentData.loaded) {
        event.server.runCommandSilent('fill -4 -4 -4 4 4 4 minecraft:air');
        event.server.runCommandSilent('setblock 0 -5 0 minecraft:grass_block');
        event.server.runCommandSilent('setblock 0 5 0 minecraft:glowstone');
        event.server.runCommandSilent('setworldspawn 0 0 0');
        event.server.persistentData.loaded = true;
    }
});
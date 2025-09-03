ItemEvents.tooltip(event => {
    event.addAdvanced('gtceu:wetmill', (item, advanced, text) => {
        text.add(Text.of('§cHas Perfect Overclock'));
    });

    event.addAdvanced('gtceu:drymill', (item, advanced, text) => {
        text.add(Text.of('§cHas Perfect Overclock'));
    });

    event.addAdvanced('gtceu:hardened_core_drilling_rig', (item, advanced, text) => {
        text.add(Text.of('§cHas Perfect Overclock'));
    });
});

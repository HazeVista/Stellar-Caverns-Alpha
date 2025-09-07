ItemEvents.tooltip(event => {

    event.addAdvanced('gtceu:wetmill', (item, advanced, text) => {
        text.add(1, Text.of('Has Perfect Overclock'));
    }); 
});


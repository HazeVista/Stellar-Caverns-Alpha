//Create a crude cobblestone hammer
ServerEvents.recipes(event => {
    event.shaped('kubejs:crude_cobblestone_hammer', [
        'BBB',
        ' A ',
        ' A '
    ], {
        A: 'minecraft:oak_log',
        B: 'minecraft:cobblestone'
    });

    event.shaped('kubejs:cobblestone_mortar', [
        ' A ',
        'BAB',
        'BBB'
    ], {
        A: 'minecraft:cobblestone',
        B: 'minecraft:stone'
    });
});




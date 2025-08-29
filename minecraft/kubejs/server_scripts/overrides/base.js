ServerEvents.recipes(event => {


    // Redo crafting table recipe to use logs instead of planks
    event.remove({ output: 'minecraft:crafting_table' });
    event.shaped('minecraft:crafting_table', [
        'AA',
        'AA'
    ], {
        A: 'minecraft:oak_log',
        B: 'minecraft:cobblestone'
    });




});
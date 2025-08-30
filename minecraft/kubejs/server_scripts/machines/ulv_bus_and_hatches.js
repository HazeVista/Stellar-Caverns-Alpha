ServerEvents.recipes(event => {
    event.shaped('gtceu:ulv_input_bus', [
        ' A ',
        ' B '

    ], {
        A: 'minecraft:chest',
        B: 'gtceu:ulv_machine_hull'
    });

    event.shaped('gtceu:ulv_input_hatch', [
        ' A ',
        ' B '

    ], {
        A: 'minecraft:glass',
        B: 'gtceu:ulv_machine_hull'
    });

});

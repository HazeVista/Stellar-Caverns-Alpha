GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('dense_low_grade_terralite_superconductor')
        .ingot() 
        .cableProperties(32, 2, 0, true, 90)
        .color(0x696969)

    event.create('magnesiated_terralite_superconductor')
        .cableProperties(128, 4, 0, true)
        .color(0x3e5c43)
        .ingot()
        .blastTemp(1600, 'low', 48, 300)

    
});


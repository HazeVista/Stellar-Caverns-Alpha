GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('low_grade_terralite_superconductor')
        .ingot() // generates ingot form
        .cableProperties(
            32, // voltage (example: UHV)
            2,      // amperage
            0,       // loss per block (superconductors always 0)
            true,    // isSuperCon
            90       // critical temperature in Kelvin
        )
        .color(0x696969); // optional color tint
});
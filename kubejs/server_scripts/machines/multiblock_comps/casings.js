ServerEvents.recipes(event => {
    event.shaped('2x kubejs:corrosion_resist_machine_casing', [
        'ABA',
        'ECE',
        'ADA'
    ], {
        A: 'gtceu:rose_gold_plate',
        B: '#forge:tools/hammers',
        C: 'gtceu:steel_frame',
        D: '#forge:tools/wrench',
        E: 'gtceu:steel_plate'
    });

    event.recipes.gtceu.assembler('assembler_rose_casings')
        .itemInputs('4x gtceu:rose_gold_plate', '2x gtceu:steel_plate', 'gtceu:steel_frame')
        .itemOutputs('2x kubejs:corrosion_resist_machine_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
    
    event.recipes.gtceu.assembler('assemble_autoclave_casings')
        .itemInputs('gtceu:clean_machine_casing')
        .inputFluids('gtceu:polyvinyl_chloride 288')
        .itemOutputs('kubejs:inert_pvc_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
});
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // Thermal Generator
	event.create('geothermal_generator')
		.category('basic')
		.setEUIO('in')
		.setMaxIOSize(1, 1, 2, 1)
		.setSlotOverlay(false, false, GuiTextures.MOLECULAR_OVERLAY_1)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.TURBINE);

    event.create('water_pump')
        .category('basic')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 0, 1)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.TURBINE);
});


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('geothermal_generator', 'generator')
		.tiers(GTValues.LV, GTValues.MV, GTValues.HV)
		.definition((tier, builder) => (
			builder
				.recipeType('geothermal_generator')
				.regressWhenWaiting(false)
                .workableTieredHullModel("kubejs:block/singleblock/thermal_generator") 
		))

    event.create('water_pump', 'simple')
		.tiers(GTValues.LV, GTValues.MV, GTValues.HV)
		.definition((tier, builder) => (
			builder
				.recipeType('water_pump')
				.regressWhenWaiting(false)
                .workableTieredHullModel("gtceu:block/machines/fluid_heater") 
		))     
});




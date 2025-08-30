GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	// Machines
	event.create('primitive_maceration')
	     .category('simple')
		 .setEUIO('in')
		 .setMaxIOSize(1,1,0,0)
		 .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		 .setSound(GTSoundEntries.MACERATOR);

	event.create('primitive_mixer')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 2, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.MIXER);

	event.create('primitive_extractor')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(1, 1, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.BOILER);

	event.create('primitive_forge_hammer')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(1, 1, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.COMPRESSOR);

	event.create('primitive_compressor')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(1, 1, 0, 1)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.COMPRESSOR);

	event.create('primitive_kiln')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 2, 1, 0)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FIRE);

	event.create('primitive_sifter')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 4, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.MACERATOR);

	event.create('primitive_centrifuge')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(1, 4, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.CENTRIFUGE);



    // Thermal Generator
	event.create('thermal_generator')
		.category('simple')
		.setEUIO('out')
		.setMaxIOSize(1, 0, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Machines
	event.create('macerator', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_maceration')
				.workableCasingModel('minecraft:block/cobblestone', 'gtceu:block/machines/macerator')
		))

	event.create('centrifuge', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_centrifuge')
				.workableCasingModel('minecraft:block/stone_bricks', 'gtceu:block/machines/centrifuge')
		))

	event.create('mixer', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_mixer')
				.workableCasingModel('minecraft:block/cobblestone', 'gtceu:block/machines/mixer')
		))

	event.create('extractor', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_extractor')
				.workableCasingModel('minecraft:block/cobblestone', 'gtceu:block/machines/extractor')
		))


	event.create('compressor', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_compressor')
				.workableCasingModel('minecraft:block/cobblestone', 'gtceu:block/machines/compressor')
		))


	event.create('forge_hammer', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_forge_hammer')
				.workableCasingModel('minecraft:block/cobblestone', 'gtceu:block/machines/forge_hammer')
		))

	event.create('kiln', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_kiln')
				.workableCasingModel('minecraft:block/stone_bricks', 'gtceu:block/machines/arc_furnace')
		))

	event.create('sifter', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_sifter')
				.workableCasingModel('minecraft:block/stone_bricks', 'gtceu:block/machines/sifter')
		))

	// Generators
	event.create('thermal_generator', 'generator')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('thermal_generator')
				.regressWhenWaiting(false)
				.workableCasingModel('minecraft:block/stone_bricks', 'gtceu:block/generators/steam_turbine')
		))
});





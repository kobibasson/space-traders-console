/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The good\'s symbol.
 * @export
 * @enum {string}
 */

export const TradeSymbol = {
    PreciousStones: 'PRECIOUS_STONES',
    QuartzSand: 'QUARTZ_SAND',
    SiliconCrystals: 'SILICON_CRYSTALS',
    AmmoniaIce: 'AMMONIA_ICE',
    LiquidHydrogen: 'LIQUID_HYDROGEN',
    LiquidNitrogen: 'LIQUID_NITROGEN',
    IceWater: 'ICE_WATER',
    ExoticMatter: 'EXOTIC_MATTER',
    AdvancedCircuitry: 'ADVANCED_CIRCUITRY',
    GravitonEmitters: 'GRAVITON_EMITTERS',
    Iron: 'IRON',
    IronOre: 'IRON_ORE',
    Copper: 'COPPER',
    CopperOre: 'COPPER_ORE',
    Aluminum: 'ALUMINUM',
    AluminumOre: 'ALUMINUM_ORE',
    Silver: 'SILVER',
    SilverOre: 'SILVER_ORE',
    Gold: 'GOLD',
    GoldOre: 'GOLD_ORE',
    Platinum: 'PLATINUM',
    PlatinumOre: 'PLATINUM_ORE',
    Diamonds: 'DIAMONDS',
    Uranite: 'URANITE',
    UraniteOre: 'URANITE_ORE',
    Meritium: 'MERITIUM',
    MeritiumOre: 'MERITIUM_ORE',
    Hydrocarbon: 'HYDROCARBON',
    Antimatter: 'ANTIMATTER',
    FabMats: 'FAB_MATS',
    Fertilizers: 'FERTILIZERS',
    Fabrics: 'FABRICS',
    Food: 'FOOD',
    Jewelry: 'JEWELRY',
    Machinery: 'MACHINERY',
    Firearms: 'FIREARMS',
    AssaultRifles: 'ASSAULT_RIFLES',
    MilitaryEquipment: 'MILITARY_EQUIPMENT',
    Explosives: 'EXPLOSIVES',
    LabInstruments: 'LAB_INSTRUMENTS',
    Ammunition: 'AMMUNITION',
    Electronics: 'ELECTRONICS',
    ShipPlating: 'SHIP_PLATING',
    ShipParts: 'SHIP_PARTS',
    Equipment: 'EQUIPMENT',
    Fuel: 'FUEL',
    Medicine: 'MEDICINE',
    Drugs: 'DRUGS',
    Clothing: 'CLOTHING',
    Microprocessors: 'MICROPROCESSORS',
    Plastics: 'PLASTICS',
    Polynucleotides: 'POLYNUCLEOTIDES',
    Biocomposites: 'BIOCOMPOSITES',
    QuantumStabilizers: 'QUANTUM_STABILIZERS',
    Nanobots: 'NANOBOTS',
    AiMainframes: 'AI_MAINFRAMES',
    QuantumDrives: 'QUANTUM_DRIVES',
    RoboticDrones: 'ROBOTIC_DRONES',
    CyberImplants: 'CYBER_IMPLANTS',
    GeneTherapeutics: 'GENE_THERAPEUTICS',
    NeuralChips: 'NEURAL_CHIPS',
    MoodRegulators: 'MOOD_REGULATORS',
    ViralAgents: 'VIRAL_AGENTS',
    MicroFusionGenerators: 'MICRO_FUSION_GENERATORS',
    Supergrains: 'SUPERGRAINS',
    LaserRifles: 'LASER_RIFLES',
    Holographics: 'HOLOGRAPHICS',
    ShipSalvage: 'SHIP_SALVAGE',
    RelicTech: 'RELIC_TECH',
    NovelLifeforms: 'NOVEL_LIFEFORMS',
    BotanicalSpecimens: 'BOTANICAL_SPECIMENS',
    CulturalArtifacts: 'CULTURAL_ARTIFACTS',
    FrameProbe: 'FRAME_PROBE',
    FrameDrone: 'FRAME_DRONE',
    FrameInterceptor: 'FRAME_INTERCEPTOR',
    FrameRacer: 'FRAME_RACER',
    FrameFighter: 'FRAME_FIGHTER',
    FrameFrigate: 'FRAME_FRIGATE',
    FrameShuttle: 'FRAME_SHUTTLE',
    FrameExplorer: 'FRAME_EXPLORER',
    FrameMiner: 'FRAME_MINER',
    FrameLightFreighter: 'FRAME_LIGHT_FREIGHTER',
    FrameHeavyFreighter: 'FRAME_HEAVY_FREIGHTER',
    FrameTransport: 'FRAME_TRANSPORT',
    FrameDestroyer: 'FRAME_DESTROYER',
    FrameCruiser: 'FRAME_CRUISER',
    FrameCarrier: 'FRAME_CARRIER',
    FrameBulkFreighter: 'FRAME_BULK_FREIGHTER',
    ReactorSolarI: 'REACTOR_SOLAR_I',
    ReactorFusionI: 'REACTOR_FUSION_I',
    ReactorFissionI: 'REACTOR_FISSION_I',
    ReactorChemicalI: 'REACTOR_CHEMICAL_I',
    ReactorAntimatterI: 'REACTOR_ANTIMATTER_I',
    EngineImpulseDriveI: 'ENGINE_IMPULSE_DRIVE_I',
    EngineIonDriveI: 'ENGINE_ION_DRIVE_I',
    EngineIonDriveIi: 'ENGINE_ION_DRIVE_II',
    EngineHyperDriveI: 'ENGINE_HYPER_DRIVE_I',
    ModuleMineralProcessorI: 'MODULE_MINERAL_PROCESSOR_I',
    ModuleGasProcessorI: 'MODULE_GAS_PROCESSOR_I',
    ModuleCargoHoldI: 'MODULE_CARGO_HOLD_I',
    ModuleCargoHoldIi: 'MODULE_CARGO_HOLD_II',
    ModuleCargoHoldIii: 'MODULE_CARGO_HOLD_III',
    ModuleCrewQuartersI: 'MODULE_CREW_QUARTERS_I',
    ModuleEnvoyQuartersI: 'MODULE_ENVOY_QUARTERS_I',
    ModulePassengerCabinI: 'MODULE_PASSENGER_CABIN_I',
    ModuleMicroRefineryI: 'MODULE_MICRO_REFINERY_I',
    ModuleScienceLabI: 'MODULE_SCIENCE_LAB_I',
    ModuleJumpDriveI: 'MODULE_JUMP_DRIVE_I',
    ModuleJumpDriveIi: 'MODULE_JUMP_DRIVE_II',
    ModuleJumpDriveIii: 'MODULE_JUMP_DRIVE_III',
    ModuleWarpDriveI: 'MODULE_WARP_DRIVE_I',
    ModuleWarpDriveIi: 'MODULE_WARP_DRIVE_II',
    ModuleWarpDriveIii: 'MODULE_WARP_DRIVE_III',
    ModuleShieldGeneratorI: 'MODULE_SHIELD_GENERATOR_I',
    ModuleShieldGeneratorIi: 'MODULE_SHIELD_GENERATOR_II',
    ModuleOreRefineryI: 'MODULE_ORE_REFINERY_I',
    ModuleFuelRefineryI: 'MODULE_FUEL_REFINERY_I',
    MountGasSiphonI: 'MOUNT_GAS_SIPHON_I',
    MountGasSiphonIi: 'MOUNT_GAS_SIPHON_II',
    MountGasSiphonIii: 'MOUNT_GAS_SIPHON_III',
    MountSurveyorI: 'MOUNT_SURVEYOR_I',
    MountSurveyorIi: 'MOUNT_SURVEYOR_II',
    MountSurveyorIii: 'MOUNT_SURVEYOR_III',
    MountSensorArrayI: 'MOUNT_SENSOR_ARRAY_I',
    MountSensorArrayIi: 'MOUNT_SENSOR_ARRAY_II',
    MountSensorArrayIii: 'MOUNT_SENSOR_ARRAY_III',
    MountMiningLaserI: 'MOUNT_MINING_LASER_I',
    MountMiningLaserIi: 'MOUNT_MINING_LASER_II',
    MountMiningLaserIii: 'MOUNT_MINING_LASER_III',
    MountLaserCannonI: 'MOUNT_LASER_CANNON_I',
    MountMissileLauncherI: 'MOUNT_MISSILE_LAUNCHER_I',
    MountTurretI: 'MOUNT_TURRET_I',
    ShipProbe: 'SHIP_PROBE',
    ShipMiningDrone: 'SHIP_MINING_DRONE',
    ShipSiphonDrone: 'SHIP_SIPHON_DRONE',
    ShipInterceptor: 'SHIP_INTERCEPTOR',
    ShipLightHauler: 'SHIP_LIGHT_HAULER',
    ShipCommandFrigate: 'SHIP_COMMAND_FRIGATE',
    ShipExplorer: 'SHIP_EXPLORER',
    ShipHeavyFreighter: 'SHIP_HEAVY_FREIGHTER',
    ShipLightShuttle: 'SHIP_LIGHT_SHUTTLE',
    ShipOreHound: 'SHIP_ORE_HOUND',
    ShipRefiningFreighter: 'SHIP_REFINING_FREIGHTER',
    ShipSurveyor: 'SHIP_SURVEYOR',
    ShipBulkFreighter: 'SHIP_BULK_FREIGHTER'
} as const;

export type TradeSymbol = typeof TradeSymbol[keyof typeof TradeSymbol];




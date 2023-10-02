const QuestionData = [
    {
        question: "Investment Goals:",
        options: [
            "Short-term gains and high returns are my primary goals.",
            "I'm aiming for steady growth and long-term financial security.",
            "I'm looking to preserve capital and avoid"
        ]
    },
    {
        question: "Risk Perception",
        options: [
            "I'm comfortable with the possibility of significant investment losses.",
            "I can tolerate moderate fluctuations but not substantial losses.",
            "I prefer to avoid any possibility of losing money."
        ]
    },
    {
        question: "Time Horizon",
        options: [
            "Short-term gains are my primary focus.",
            "I'm open to holding investments for 5-10 years.",
            "I'm looking for long-term growth over a decade"
        ]
    },
    {
        question: "Reaction to Market Volatility:",
        options: [
            "I'm unfazed by market fluctuations and stay invested.",
            "I get concerned but stay patient during market ups and downs.",
            "I tend to panic and may make impulsive decisions."
        ]
    }
];


const fight = [ 
    {qution: 'Investment Goals', option: ' Short-term gains and high returns are my primary goals'},
    {qution: 'Risk Perception', option: 'I can tolerate moderate fluctuations but not substantial losses.'},
    {qution: 'Time Horizon', option: "I'm looking for long-term growth over a decade or more."},
    {qution: 'Reaction to Market Volatility', option: "I'm unfazed by market fluctuations and stay invested."}
];

let recommendations = [
    {
        option: "Short-term gains and high returns are my primary goals.",
        assets: [
            "QuickProfitPulse",
            "RapidReturnRidge",
            "SwiftGainShelter",
            "TurboWealthVault",
            "InstantYieldFortress"
        ]
    },
    {
        option: "I'm aiming for steady growth and long-term financial security.",
        assets: [
            "EverGreenEstate",
            "SecureHorizonHoldings",
            "LongViewLoom",
            "SustainedWealthNest",
            "EnduringGrowthGrove"
        ]
    },
    {
        option: "I'm looking to preserve capital and avoid",
        assets: [
            "CapitalPreserveShield",
            "PrudentFundGuard",
            "SafeHavenAssets",
            "PreserveWealthHaven",
            "CapitalGuardianVault"
        ]
    },
    {
        option: "I'm comfortable with the possibility of significant investment losses.",
        assets: [
            "EverGreenEstate",
            "SecureHorizonHoldings",
            "LongViewLoom",
            "SustainedWealthNest",
            "EnduringGrowthGrove"
        ]
    },
    {
        option: "I can tolerate moderate fluctuations but not substantial losses.",
        assets: [
            "QuantumWealthVenture",
            "ZenithHarborCapital ",
            "MomentumForgeFund",
            "ResilientEquityVault",
            "InfinityProsperityFleet"
        ]
    },
    {
        option: "I prefer to avoid any possibility of losing money.",
        assets: [
            "VelocityGainPinnacle",
            "SwiftReturnHorizon ",
            "FlashWealthHarbor",
            "TurboChargeVenture",
            "InstantProsperityNest"
        ]
    },
    {
        option: "Short-term gains are my primary focus",
        assets: [
            "SwiftProfitSprint",
            "RapidReturnExpress ",
            "TurboGrowthCruise",
            "QuickWinWave",
            "InstantIncomeDash"
        ]
    },
    {
        option: "I'm open to holding investments for 5-10 years.",
        assets: [
            "EnduringWealthVista",
            "SustainableHorizonHarbor ",
            "LongViewProsperityHub",
            "EverlastingGrowthSculpt",
            "TimeSpanFortuneNest"
        ]
    },
    {
        option: "I'm looking for long-term growth over a decade",
        assets: [
            "DecadeProsperHarbor",
            "EternalGrowthVanguard ",
            "InfinityWealthHorizon",
            "EnduranceFortuneSculpt",
            "TimeSpanEpicNest"
        ]
    },
    {
        option: "I'm unfazed by market fluctuations and stay invested.",
        assets: [
            "ResilientMarketGuard",
            "SteadyInvestForge ",
            "UnwaveringWealthVault",
            "EnduranceHarborHoldings",
            "PersevereProsperNest"
        ]
    },
    {
        option: "I get concerned but stay patient during market ups and downs.",
        assets: [
            "PatientCalmHarbor",
            "SteadyConcernVault ",
            "SereneMarketResilience",
            "TranquilUpsDownsHoldings",
            "ResolutePatienceNest"
        ]
    },
    {
        option: "I tend to panic and may make impulsive decisions.",
        assets: [
            "CalmDecisionGuard",
            "ThoughtfulPanicShield ",
            "SteadyMindResilience",
            "ComposedChoiceHaven",
            "ReflectiveGuardianVault"
        ]
    }
];

let selectedOptions = [
    "I'm comfortable with the possibility of significant investment losses.",
    "I prefer to avoid any possibility of losing money.",
    "I'm open to holding investments for 5-10 years.",
    "I tend to panic and may make impulsive decisions."
];

let recommendedAssets = [];

selectedOptions.forEach((selectedOption) => {
    recommendations.forEach((recommendation) => {
        if (recommendation.option.includes(selectedOption)) {
            recommendedAssets.push({
                selectedOption,
                assets: recommendation.assets
            });
        }
    });
});

let recommendedAssets1 = [];

fight.forEach((fightOption) => {
    recommendations.forEach((recommendation) => {
        if (recommendation.option.includes(fightOption.option)) {
            recommendedAssets1.push({
                question: fightOption.qution,
                assets: recommendation.assets
            });
        }
    });
});

console.log(recommendedAssets1);





 





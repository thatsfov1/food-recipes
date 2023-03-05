import { MutableRefObject } from "react";

export interface ISearchParams {
    debounced?: string,
    cuisine?: string,
    excludeCuisine?: string,
    diet?: string,
    equipment?: string,
    type?: string,
    sort?: string,
    sortDirection?: 'asc' | 'desc',
    offset?: number,
    number?: number
}

export interface Recipe {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
    originalId?: any;
    spoonacularSourceUrl: string;
    license: string;
}

export interface Us {
    amount: number;
    unitShort: string;
    unitLong: string;
}

export interface Metric {
    amount: number;
    unitShort: string;
    unitLong: string;
}

export interface Measures {
    us: Us;
    metric: Metric;
}

export interface ExtendedIngredient {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: Measures;
}

export interface Nutrient {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}

export interface Property {
    name: string;
    amount: number;
    unit: string;
}

export interface Flavonoid {
    name: string;
    amount: number;
    unit: string;
}

export interface Nutrient2 {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}
export interface Ingredient2 {
    id: number;
    name: string;
    amount: number;
    unit: string;
    nutrients: Nutrient2[];
}

export interface CaloricBreakdown {
    percentProtein: number;
    percentFat: number;
    percentCarbs: number;
}

export interface WeightPerServing {
    amount: number;
    unit: string;
}

export interface Nutrition {
    nutrients: Nutrient[];
    properties: Property[];
    flavonoids: Flavonoid[];
    ingredients: Ingredient2[];
    caloricBreakdown: CaloricBreakdown;
    weightPerServing: WeightPerServing;
}

export interface Ingredient {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

export interface Temperature {
    number: number;
    unit: string;
}

export interface Equipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
    temperature: Temperature;
}

export interface Length {
    number: number;
    unit: string;
}

export interface Step {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Equipment[];
    length: Length;
}

export interface AnalyzedInstruction {
    name: string;
    steps: Step[];
}

export interface ProductMatch {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    averageRating: number;
    ratingCount: number;
    score: number;
    link: string;
}


export interface ServerResponse {
    recipes: Recipe[];
}




    export interface WinePairing {
        pairedWines: any[];
        pairingText: string;
        productMatches: any[];
    }


    export interface Equipment {
        id: number;
        name: string;
        localizedName: string;
        image: string;
    }

    export interface Length {
        number: number;
        unit: string;
    }

    export interface Step {
        number: number;
        step: string;
        ingredients: Ingredient[];
        equipment: Equipment[];
        length: Length;
    }

    export interface AnalyzedInstruction {
        name: string;
        steps: Step[];
    }

    export interface SingleRecipe {
        vegetarian: boolean;
        vegan: boolean;
        glutenFree: boolean;
        dairyFree: boolean;
        veryHealthy: boolean;
        cheap: boolean;
        veryPopular: boolean;
        sustainable: boolean;
        lowFodmap: boolean;
        weightWatcherSmartPoints: number;
        gaps: string;
        preparationMinutes: number;
        cookingMinutes: number;
        aggregateLikes: number;
        healthScore: number;
        creditsText: string;
        license: string;
        sourceName: string;
        pricePerServing: number;
        extendedIngredients: ExtendedIngredient[];
        id: number;
        title: string;
        readyInMinutes: number;
        servings: number;
        sourceUrl: string;
        image: string;
        imageType: string;
        nutrition: Nutrition;
        summary: string;
        cuisines: any[];
        dishTypes: string[];
        diets: string[];
        occasions: string[];
        winePairing: WinePairing;
        instructions: string;
        analyzedInstructions: any[];
        originalId?: any;
        spoonacularSourceUrl: string;
    }

    export interface Result {
        id: number;
        title: string;
        image: string;
        imageType: string;
    }

    export interface SearchResponse {
        results: Result[];
        offset: number;
        number: number;
        totalResults: number;
    }








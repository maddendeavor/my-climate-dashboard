type EnergySourcesBreakdown = {
    nuclear?: number,
    solar?: number,
    coal?: number
}

type GreenEnergyStats = {
    created: string,
    sw_version: number,
    ba_name: string,
    source_ratio_current: EnergySourcesBreakdown,
    green_ratio_current: number,
    green_ratio_mean: number,
    green_threshold_low: number,
    green_threshold_high: number,
    alert_text: string,
}

export type { EnergySourcesBreakdown, GreenEnergyStats}
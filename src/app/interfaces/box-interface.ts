class medicamentI {
}

export interface BoxI {
    title: string;
    place?: string;
    description?: string;
    img?: string;
    groups?: string[];
    medicaments?: medicamentI[];
    alert?: number;
}

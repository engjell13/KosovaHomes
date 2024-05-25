export type dataTypes = {
    id: number;
    image: string;
    description: string;
    slug: string;
    text: string;
    address: string;
    price?: string;
    room?: string;
    bathroom?: string;
    type: string;
    date: string;
    premium: boolean;
    city: string;
    contact: string;
    meter?: string;
    company?: string;
    fullName?: string;
    hotelName?: string;
}

export type AccordionTypes = {
    title: string;
    description: string;
}
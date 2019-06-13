export type Address = {
    address: string;
    city: string;
    postalCode: string;
    country: string;
};

export type User = {
    id: number;
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address?: Address;
    website?: string;
};

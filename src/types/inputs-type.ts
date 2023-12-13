export type Inputs = {
    name?: string;
    email?: string;
    password?: string;
    code?: string;
};

export type LoginInputs = {
    email: string;
    password: string;
};

export type RegisterInputs = {
    name: string;
    email: string;
};

export type RegisterCodeInputs = {
    code: string;
};

export type RegisterPasswordInputs = {
    password: string;
};

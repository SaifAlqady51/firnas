export interface SuccessFormResponseType {
    status: "success";
    message: string;
}

export interface FailedFormResponseType {
    status: "error";
    message: string;
}

export interface ValidateEmailResponseType extends SuccessFormResponseType {
    code: string;
}

export interface LoginResponseType extends SuccessFormResponseType {
    userData: { name: string; email: string; subscription: string };
}

export interface RegisterResponseType extends SuccessFormResponseType {}

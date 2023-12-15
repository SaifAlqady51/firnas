export class SuccessFormResponseType {
    status: "success" = "success";
    message: string = "";
}

export class FailedFormResponseType {
    status: "error" = "error";
    message: string = "";
}

export class ValidateEmailResponseType extends SuccessFormResponseType {
    code: string = "";
}

export interface LoginResponseType extends SuccessFormResponseType {
    userData: { name: string; email: string; subscription: string };
}

export class RegisterResponseType extends SuccessFormResponseType {}

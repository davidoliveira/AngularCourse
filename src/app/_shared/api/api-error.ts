interface ApiError {
    statusCode: number;
    name: string;
    message: string;
    details: Details;
    stack: string;
}

interface Details {
    context: string;
    codes: Codes;
    messages: Codes;
}

interface Codes {
    email: string[];
}

export interface Authority {
    authority: string;
}

export interface Account {
    id: number;
    username: string;
    email: string;
    authorities: Authority[];
    password: string;
    enabled: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
}

export interface Donation {
    id: number;
    amount: number;
}

export interface Message {
    id: number;
    message: string;
}

export class RootObject {
    id: number;
    name: string;
    account: Account;
    donations: Donation[];
    messages: Message[];
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
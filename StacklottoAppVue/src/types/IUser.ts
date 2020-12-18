interface IUser extends IAffiliate, IAgent {
    firstName?: string,
    lastName?: string,
    username?: string,
    email?: string,
    isStaff?: boolean,
    isSuperuser?: boolean,
    isActive?: boolean,
    phone?: string,
    balance?: number,
    bankAccountName?: string;
    bankAccountNumber?: string;
    bankName?: string;
}
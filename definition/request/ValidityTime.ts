type ValidityTime = {
    valid_from?: string,
    valid_until?: string,
    decision_time?: {
        decision_from: string,
        close_after?: boolean
    },
};

export default ValidityTime;

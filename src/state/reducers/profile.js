const initialState =
{
    usageEmails: true,
    newsletter: false,
    marketing: false,
    status: true,
    email: "",
}
    ;

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USAGE":
            return {
                ...state,
                usageEmails: action.payload.data,
            };
        case "UPDATE_NEWSLETTER":
            return {
                ...state,
                newsletter: action.payload.data,
            };
        case "UPDATE_MARKETING":
            return {
                ...state,
                marketing: action.payload.data,
            };
        case "UPDATE_STATUS":
            return {
                ...state,
                status: action.payload.data,
            };
        case "UPDATE_EMAIL":
            return {
                ...state,
                email: action.payload.data,
            };
        default:
            return state;
    }
};

export default profileReducer;
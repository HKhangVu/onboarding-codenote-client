import autheticate from "./authenticate"
describe("test Reducer", () => {
    test('return initial state', () => {
        expect (autheticate (undefined,{type:"hello", payload:new Object()}))
            .toEqual(
                {
                    isAuthenticated:false
                }
            );
    });
    test('handle LOGIN_SUCCESS', () => {
        expect (autheticate (undefined,{type:"LOGIN_SUCCESS", payload:true}))
            .toEqual(
                {
                    isAuthenticated:true
                }
            );
    });
});
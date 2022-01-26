let isProduction = () => true;
function initEnv(option) {
    isProduction = () => {
        return option.env === 'production';
    };
}
export { isProduction, initEnv, };

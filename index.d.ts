declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.scss';
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module "*.png" {
    const value: string;
    export default value;
}
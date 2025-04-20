declare module "*.jpg" {
    const image: string;
    export default image;
}
declare module "*.jpeg" {
    const image: string;
    export default image;
}
declare module "**/images" {
    const imageList: string;
    export default imageList;
}
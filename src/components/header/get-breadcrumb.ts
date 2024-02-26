export function getBreadcrumb(path: string) {
    switch (path) {
        case "user":
            return "Usuários";
        case "new":
            return "Registro";
        default:
            return "Início";
    }
}

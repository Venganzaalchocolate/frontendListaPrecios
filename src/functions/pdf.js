
// función que comprueba si una imagen existe
export function imagenExiste(imagen) {
    try {
        require(`../../public${imagen}`);
        return true;
    } catch (error) {
        return false;
    }
}
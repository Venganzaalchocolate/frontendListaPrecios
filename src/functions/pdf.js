export function imagenExiste(imagen) {
    try {
        require(`../../public${imagen}`);
        return true;
    } catch (error) {
        return false;
    }
}
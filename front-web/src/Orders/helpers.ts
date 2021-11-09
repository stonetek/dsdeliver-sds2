import { Product } from "./types";

export function checkIsSelected(selectedProducts: Product[], product: Product) {
    selectedProducts.some(item => item.id === product.id);
}
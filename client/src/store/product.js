import {create} from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success: false, message: "Please fill in all fields."}
        }
        const res = await fetch("/api/products", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products: [...state.products, data.data] }))
        return {success: true, message: "Product created successfully."}
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data });
    },
    deleteProduct: async (prodId) => {
        const res = await fetch(`/api/products/${prodId}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) return {success: false, message: data.message};

        // Deleting the current product from the state to update the UI in real time
        set(state => ({products: state.products.filter(product => product._id !== prodId)}));
        return {success: true, message: "Product deleted successfully."}
    }
}))

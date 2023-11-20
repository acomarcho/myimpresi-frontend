export const sendWhatsappMessage = (message: string) => {
  window.open(
    `https://wa.me/${
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    }/?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
};

export const generalWhatsappMessage = `Halo, saya memiliki beberapa pertanyaan mengenai produk pada Impresi.`;

export const productWhatsappMessage = (
  productName: string,
  SKU: string,
  productURL: string
) => `Halo, saya ingin menanyakan mengenai produk berikut:
SKU produk: ${SKU}
Nama produk: ${productName}
URL produk: ${productURL}`;

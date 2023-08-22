export const formatPrice = (number) => {
    const newPrice = Intl.NumberFormat('en-NG',{
        style: 'currency',
        currency: 'NGN'}).format(number * 2.3)
    return newPrice
}

export const getUniqueValues = () => {}

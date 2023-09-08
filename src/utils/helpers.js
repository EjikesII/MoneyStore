export const formatPrice = (number) => {
    const newPrice = Intl.NumberFormat('en-NG',{
        style: 'currency',
        currency: 'NGN'}).format(number * 2.3)
    return newPrice
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    if (type === 'colors') {
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
}

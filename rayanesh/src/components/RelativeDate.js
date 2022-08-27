function getDifferenceInYears(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return  diffInMs / (1000 * 60 * 60 * 24 * 365);
}


function findDistance(differenceInYears, amount, unit) {
    if (differenceInYears >= 1) {
        console.log(differenceInYears)
        amount = Math.floor(differenceInYears)
    } else {
        const differenceInMonths = differenceInYears * 12
        if (differenceInMonths >= 1) {
            console.log(differenceInMonths)
            amount = Math.floor(differenceInMonths)
            unit = 'ماه'
        } else {
            const differenceInDays = differenceInMonths * 30
            if (differenceInDays >= 1) {
                amount = Math.floor(differenceInDays)
                unit = 'روز'
            } else {
                const differenceInHours = differenceInDays * 24
                if (differenceInHours >= 1) {
                    amount = Math.floor(differenceInHours)
                    unit = 'ساعت'
                } else {
                    const differenceInMinutes = differenceInHours * 60
                    if (differenceInMinutes >= 1) {
                        amount = Math.floor(differenceInMinutes)
                        unit = 'دقیقه'
                    } else {
                        const differenceInSeconds = differenceInMinutes * 60
                        if (differenceInSeconds >= 1) {
                            amount = Math.floor(differenceInSeconds)
                            unit = 'ثانیه'
                        }
                    }
                }
            }
        }
    }
    return {
        unit: unit,
        amount: amount
    }
}

const RelativeDate = (date) => {
    const now = Date.now()

    let unit = 'سال '
    let amount = 0;
    const differenceInYears = getDifferenceInYears(now, date)
    let time = findDistance(differenceInYears, amount, unit);
    return (
            time.amount + ' ' + time.unit + ' پیش '
    )
}


export default RelativeDate
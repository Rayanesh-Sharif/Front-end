function FarsiNumber({number}) {
    const persianNumbers = [
        '۰',
        '۱',
        '۲',
        '۳',
        '۴',
        '۵',
        '۶',
        '۷',
        '۸',
        '۹',
    ];
    return number.toString().replace(/\d/g, (digit) => persianNumbers[digit]);
}

export default FarsiNumber;
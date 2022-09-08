const formatMoney = money => {
    let moneyFormatted=''

    if(money>=1000000000){
        if(Math.floor(Math.floor(money-(Math.floor(money/1000000000)*1000000000))/1000000)>1){
            moneyFormatted = `${Math.floor(money/1000000000)} tỷ ${Math.floor(Math.floor(money-(Math.floor(money/1000000000)*1000000000))/1000000)} triệu VNĐ`
            return moneyFormatted
        }else{
            moneyFormatted = `${Math.floor(money/1000000000)} tỷ VNĐ`
            return moneyFormatted
        }
            
    }

    if(money>=1000000 && money<1000000000){
        if(Math.floor(Math.floor(money-(Math.floor(money/1000000)*1000000))/1000)>1){
            moneyFormatted = `${Math.floor(money/1000000)} triệu ${Math.floor(Math.floor(money-(Math.floor(money/1000000)*1000000))/1000)} nghìn VNĐ`
            return moneyFormatted
        }else{
            moneyFormatted = `${Math.floor(money/1000000)} triệu VNĐ`
            return moneyFormatted
        }
    }
    if(money>=1000 && money <1000000){
        moneyFormatted=`${Math.floor(money/1000)} nghìn VNĐ`
        return moneyFormatted
    }

}

export default formatMoney
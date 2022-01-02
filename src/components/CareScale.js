function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() => handleClick(scaleValue, scaleType)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}



function handleClick(scaleValue, scaleType) {

    if (scaleType =="light") {
        if (scaleValue ==1 ){
            alert("cette plante requit peu de lumiere")
        }
        else{
            if (scaleValue ==2){
                alert("cette plante requit moderament de lumiere ")
            }
            else{
                alert("cette plante requit beaucoup de lumiere ")
            }
        }
    }
    else{
        if (scaleValue ==1 ){
            alert("cette plante requit peu d'arrosage")
        }
        else{
            if (scaleValue ==2){
                alert("cette plante requit moderament d'arrosage ")
            }
            else{
                alert("cette plante requit beaucoup d'arrosage ")
            }
        }
    }
}

export default CareScale
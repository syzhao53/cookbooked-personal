import {fraction, format} from 'mathjs'

export function useIngredient() {
    const formatIngred = (servMult, quantity, unit, name) => {
        let multQuant = servMult * quantity
        let finalUnit = unit
        let finalName = name

        if (finalUnit != null) {
            if (multQuant > 1) {
                finalUnit += "s"
            }
        } else {
            // if (multQuant > 1) { // TODO: PLURAL HANDLING
            //     finalName += "s"
            // }

            finalUnit = ''
        }

        if (multQuant % 1 != 0) {
            let numString = "" + multQuant
            const split = numString.split(".")
            let fracString = format(fraction("." + split[1]))
            const splitFrac = fracString.split("/")

            return <span><span>{split[0] > 0 ? split[0] : ''}</span>
            <span><sup>{splitFrac[0]}</sup>&frasl;<sub>{splitFrac[1]}</sub></span>
            <span>{" " + finalUnit + " " + finalName}</span></span>
        } else {
            return multQuant + " " + finalUnit + " " + finalName
        }
    }
  return [formatIngred]
}

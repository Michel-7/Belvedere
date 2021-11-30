import React from 'react'
import Cocktail from './cocktail'

function Cocktails() {
    return (
        <div className='cocktails'>
            <div className='c-title'>
            COCKTAIL RECIPES
            </div>
            <div className='items'>
                <Cocktail img='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bloody-mary-glass-2258f4e.jpg?quality=90&resize=504,458?quality=90&webp=true&resize=504,458' name='Bloody Mary'/>
                <Cocktail img='https://www.liquor.com/thmb/j0DKX_lCKZUVeuZoN-36CqtqHzM=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg' name='Moscow mule'/>
                <Cocktail img='https://craftybartending.com/wp-content/uploads/2018/04/Screwdriver-cocktail.jpg' name='Screwdriver'/>
                <Cocktail img='https://amandascookin.com/wp-content/uploads/2021/05/Cosmopolitan-Cocktail-RC.jpg' name='Cosmo'/>
                <Cocktail img='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/440x400-caipirovska-092cd44.jpg' name='Caipirovska'/>
                <Cocktail img='https://www.thespruceeats.com/thmb/MZdODkc0EpBC2lk2IeEco9Bb1w4=/3000x2000/filters:fill(auto,1)/white-russian-recipe-761274-Hero_02-e1b64f0eac1f4b94b9dbe94fc66d83a8.jpg' name='White Russian'/>
            </div>
            </div>
    )
}   

export default Cocktails

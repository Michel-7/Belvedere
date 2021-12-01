import React from 'react'
import { Link,useParams } from 'react-router-dom'

const cocktails=[
    {id:1,img:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bloody-mary-glass-2258f4e.jpg?quality=90&resize=504,458?quality=90&webp=true&resize=504,458',name:'Bloody Mary',desc:'Combine Smirnoff No. 21 Vodka, tomato juice, worcestershire sauce, hot sauce, black pepper, and squeeze of lemon wedge to a tall glass with ice.Stir well and garnish with a celery stick.'},
    {id:2,img:'https://www.liquor.com/thmb/j0DKX_lCKZUVeuZoN-36CqtqHzM=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg',name:'Moscow mule',desc:'Pour Belvedere No.1 Vodka and lime juice into a mug; add ice cubes and ginger beer. Stir to combine.Drop a lime wedge into the mug for garnish.'},
    {id:3,img:'https://craftybartending.com/wp-content/uploads/2018/04/Screwdriver-cocktail.jpg',name:'Screwdriver',desc:'Combine Belvedere No.1 Vodka and orange juice to a rocks glass with ice.Stir well and garnish with an orange slice.'},
    {id:4,img:'https://amandascookin.com/wp-content/uploads/2021/05/Cosmopolitan-Cocktail-RC.jpg',name:'Cosmo',desc:'Combine Belvedere No.1 Vodka, triple sec, cranberry juice, and lime juice into a shaker filled with ice.Shake well and strain into a chilled martini glass. Garnish with an orange twist.'},
    {id:5,img:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/440x400-caipirovska-092cd44.jpg',name:'Caipirovska',desc:'Fill a rocks glass with cracked ice to chill, and set aside.Add the simple syrup (or sugar) and lime quarters to a shaker. Muddle to extract the juice without forcing the rind from the limes. Dump the ice from the rocks glass into the shaker, add the Belvedere No.1 Vodka, and shake until well-chilled. Pour the entire drink, including the ice, into the chilled glass, and garnish with 4 lime quarters.'},
    {id:6,img:'https://www.thespruceeats.com/thmb/MZdODkc0EpBC2lk2IeEco9Bb1w4=/3000x2000/filters:fill(auto,1)/white-russian-recipe-761274-Hero_02-e1b64f0eac1f4b94b9dbe94fc66d83a8.jpg',name:'White Russian',desc:'Add Belvedere No.1 Vodka and coffee liqueur to a rocks glass filled with ice.Top with heavy cream and stir to combine.'}
]


function Description() {
    let {id}=useParams();
    let index=cocktails.findIndex(object=>id==object.id);
    const {img,name,desc}=cocktails[index];
     
    return (
        <div className='description'>
            <div className='desc-img'>
                <img src={img}/>
            </div>
            <div className='d-name'>
                {name}
            </div>
                <div className='how-to'>
                <h2>Recipe</h2>
                <p>{desc}</p>
                </div>
               <Link to='/cocktail' style={{textDecoration:'none'}}> <div className='btn'>
                    Return to Cocktails
                </div>
                </Link>
        </div>
    )
}

export default Description

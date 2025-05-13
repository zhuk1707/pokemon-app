import classes from './ComparisonItems.module.css'
// import { ComparisonItem } from '../ComparisonItem/ComparisonItem.tsx'


export const ComparisonItems = () => {
  return (
    <section className={classes.comparisonWrapper}>
      <div className="container">
        <div className={classes.comparison}>
          {/*{mockData.map((comparisonItem: MockData, index) => {
            return (
              <ComparisonItem
                key={index}
                imageUrl={comparisonItem.imageUrl}
                name={comparisonItem.name}
                height={comparisonItem.height}
                weight={comparisonItem.weight}
                stats={comparisonItem.stats}
                comparisonResult = {
                index % 2 === 0
                  ? mockComparedStatsArr
                  : mockComparedStatsArr.map((el: number) => el * -1)
              }
                display={index % 2 !== 0 ? 'default' : 'alternative'}
              />
            )
          })}*/}


        </div>
      </div>
    </section>
  )
}
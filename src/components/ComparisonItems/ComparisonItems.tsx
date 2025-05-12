import classes from './ComparisonItems.module.css'
// import { ComparisonItem } from '../ComparisonItem/ComparisonItem.tsx'
import pikachuImageUrl from '../../assets/pikachu.png'
import larvitarImageUrl from '../../assets/larvitar.png'

type StatItem = {
  statLabel: string;
  value: number;
};

interface MockData {
  imageUrl: string,
  name: string,
  height: string,
  weight: string,
  stats: StatItem[],
}

const mockData: MockData[] = [
  {
    imageUrl: pikachuImageUrl,
    name: 'Pikachu',
    height: '0.4',
    weight: '6',
    stats: [
      {
        statLabel: 'HP',
        value: 35
      },
      {
        statLabel: 'Attack',
        value: 55
      },
      {
        statLabel: 'Defense',
        value: 40
      },
      {
        statLabel: 'Sp.Atk',
        value: 50
      },
      {
        statLabel: 'Sp.Def',
        value: 50
      },
      {
        statLabel: 'Speed',
        value: 90
      }
    ]
  },
  {
    imageUrl: larvitarImageUrl,
    name: 'Larvitar',
    height: '0.6',
    weight: '72',
    stats: [
      {
        statLabel: 'HP',
        value: 50
      },
      {
        statLabel: 'Attack',
        value: 64
      },
      {
        statLabel: 'Defense',
        value: 50
      },
      {
        statLabel: 'Sp.Atk',
        value: 45
      },
      {
        statLabel: 'Sp.Def',
        value: 50
      },
      {
        statLabel: 'Speed',
        value: 41
      }
    ]
  }
]

const mockComparedStatsArr: number[] = mockData[0].stats.map((stat, index) => {
  if (stat.value > mockData[1].stats[index].value) return 1
  else if (stat.value < mockData[1].stats[index].value) return -1
  else return 0
})

console.log(mockComparedStatsArr)


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
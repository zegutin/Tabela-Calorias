import Styles from './Food.module.css'
let Food = ({name, calorias, img}) => {
  return (
    <div className={Styles.card}> 
      <img src={img}/>
     <div className={Styles.description}>
      <h2>{name}</h2>
      <p>Quantidade total de calorias: <span>{calorias}</span></p>
     </div>
    </div>
  )
}

export default Food